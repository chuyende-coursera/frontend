import React, { useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { Link } from "react-router-dom";
import ListVideoWeek from "../list/ListVideoWeek";
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
        title: "Khóa học",
        dataIndex: "course",
        width: "25%",
        editable: true,
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <Link to="">Delete</Link>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [],
      count: 0,
    };
  }

  componentDidMount() {
    console.log("props did: ", this.props);
    this.props.requestWeeksDash();
    this.props.requestCoursesDash();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
    if (nextProps.weeks.length !== this.state.dataSource.length) {
      this.setState({
        dataSource: nextProps.weeks.map((week) => {
          if (week) {
            return {
              key: week.id,
              timeComplete: week.timeComplete,
              header: week.header,
              description: week.description,
              course:
                (week.courseWeeks &&
                  week.courseWeeks[0] &&
                  week.courseWeeks[0].courses.title) ||
                null,
              videoWeek: week.videoWeek,
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

  handleAdd = () => {
    const { count, dataSource } = this.props;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
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
    console.log("dataSource: ", dataSource);
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
              <ListVideoWeek videoWeek={record.videoWeek} />
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