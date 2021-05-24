import React, { useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Switch, Form, Space } from "antd";
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

class UserDash extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Username",
        dataIndex: "username",
        width: "10%",
      },
      {
        title: "Tên",
        dataIndex: "name",
        width: "20%",
      },
      {
        title: "Email",
        dataIndex: "email",
        width: "10%",
      },
      {
        title: "SDT",
        dataIndex: "mobile",
        width: "10%",
      },
      {
        title: "Giới tính",
        dataIndex: "sex",
        width: "5%",
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        width: "10%",
        // editable: true,
      },
      {
        title: "Nhóm người dùng",
        dataIndex: "groupUsers",
        width: "10%",
        editable: true,
      },
    ];
    this.state = {
      dataSource: [],
      count: 0,
    };
  }

  componentDidMount() {
    this.props.requestUser({ groupUsersId: "2" });
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps: ", nextProps);
    if (nextProps.users.length !== this.state.dataSource.length) {
      this.setState({
        dataSource: nextProps.users.map((user) => ({
          key: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          mobile: user.mobile,
          status: user.status ? (
            <Switch
              defaultChecked
              onChange={(checked) => {
                this.props.requestUpdateUser(user.id, { status: checked });
              }}
            />
          ) : (
            <Switch
              onChange={(checked) => {
                this.props.requestUpdateUser(user.id, { status: checked });
              }}
            />
          ),
          sex:
            user.sex === 1 ? "Nam" : user.sex === 0 ? "Nữ" : "Không xác định",
          groupUsers: user.groupUsers.name,
          courses: user.courses,
        })),
      });
    }
  }

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
        <h3 className="text-center">Quản lý người dùng hệ thống</h3>
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

export default UserDash;
