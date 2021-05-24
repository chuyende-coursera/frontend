import React, { useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form, Space } from "antd";
import { Link } from "react-router-dom";
import ListVideoWeek from "../list/ListVideoWeek";
import { PlusOutlined } from "@ant-design/icons";
import AddVideoWeek from "./AddVideoWeek";
const EditableContext = React.createContext();
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class WeekDash extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Tiêu Đề Tuần",
        dataIndex: "header",
        width: "15%",
        editable: true,
      },
      {
        title: "Miêu tả",
        dataIndex: "description",
        width: "25%",
        editable: true,
      },
      {
        title: "Thời gian(Phút)",
        dataIndex: "timeComplete",
        width: "15%",
        editable: true,
      },
      {
        title: "Số thứ tự tuần",
        dataIndex: "numberWeek",
        width: "15%",
        editable: true,
      },
      {
        title: "Khóa học",
        dataIndex: "course",
        width: "25%",
        editable: true,
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (text, record) => {
          return this.state.dataSource.length >= 1 ? (
            <Space size="middle">
              <Button
                onClick={() => {
                  this.setState({ visible: true, weeksId: record.key });
                }}
              >
                <PlusOutlined />
              </Button>
              <AddVideoWeek
                requestCreateVideoDash={this.props.requestCreateVideoDash}
                visible={this.state.visible}
                onCreate={this.onCreate}
                weeksId={this.state.weeksId}
                onCancel={() => {
                  this.setState({
                    visible: false,
                  });
                }}
              />
              <Button>
                <Link to={`weeks/update/${record.key}`}>Cập nhật</Link>
              </Button>

              <Popconfirm
                title="Chắc chắn xóa?"
                onConfirm={() => this.handleDelete(record.key)}
              >
                <Button danger>Xóa</Button>
              </Popconfirm>
            </Space>
          ) : null;
        },
      },
    ];
    this.state = {
      dataSource: [],
      count: 0,
      visible: false,
      weeksId: null,
    };
  }

  onCreate = (values) => {
    console.log("Received values of form: ", values);
    this.props.requestCreateVideoDash(values);
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    this.props.requestWeeksDash();
    this.props.requestCoursesDash();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.weeks.length !== this.state.dataSource.length) {
      this.setState({
        dataSource: nextProps.weeks.map((week) => {
          if (week) {
            return {
              key: week.id,
              timeComplete: week.timeComplete,
              header: week.header,
              description: week.description,
              course: (week.courses && week.courses.title) || "Không tồn tại",
              videoWeek: week.videoWeek,
              numberWeek: week.numberWeek,
            };
          }
        }),
      });
    }
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div className="container mt-4">
        <Button
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          <Link to="weeks/create">Thêm Tuần Học</Link>
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          expandable={{
            expandedRowRender: (record) => (
              <ListVideoWeek
                videoWeek={record.videoWeek}
                requestUpdateVideoDash={this.props.requestUpdateVideoDash}
              />
            ),
          }}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

export default WeekDash;
