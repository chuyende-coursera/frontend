import React, { useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form, Space } from "antd";
import { Link } from "react-router-dom";
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

class ReviewDash extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Tài khoản",
        dataIndex: "username",
        width: "10%",
        editable: true,
      },
      {
        title: "Tên người dùng",
        dataIndex: "name",
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
        title: "Đánh giá(Sao)",
        dataIndex: "review",
        width: "10%",
        editable: true,
      },
      {
        title: "Bình luân",
        dataIndex: "comment",
        width: "30%",
        editable: true,
      },
      {
        title: "Hành động",
        dataIndex: "operation",
        render: (text, record) => {
          return this.state.dataSource.length >= 1 ? (
            <Space size="middle">
              <Popconfirm
                title="Chắc chắn xóa?"
                onConfirm={() => console.log()}
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
    };
  }

  componentDidMount() {
    this.props.requestUserCourse();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userCourse.length !== this.state.dataSource.length) {
      this.setState({
        dataSource: nextProps.userCourse
          .filter((x) => x.review || x.comment)
          .map((e) => {
            return {
              key: e.id,
              username: e.users && e.users.username,
              name: e.users && e.users.name,
              comment: e.comment,
              review: e.review,
              course: e.courses && e.courses.title,
            };
          }),
      });
    }
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    // this.props.deleteCourses(key);
    // this.setState({
    //   dataSource: dataSource.filter((item) => item.key !== key),
    // });
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
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

export default ReviewDash;
