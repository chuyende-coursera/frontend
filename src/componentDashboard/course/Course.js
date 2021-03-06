import React, { useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import "./course.css";
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

class CourseDash extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Title",
        dataIndex: "title",
        width: "30%",
        editable: true,
      },
      {
        title: "Duration",
        dataIndex: "duration",
        width: "10%",
        editable: true,
      },
      {
        title: "Skill",
        dataIndex: "skill",
        width: "10%",
        editable: true,
      },
      {
        title: "Language",
        dataIndex: "language",
        width: "10%",
        editable: true,
      },
      {
        title: "Job",
        dataIndex: "job",
        width: "10%",
        editable: true,
      },
      {
        title: "Level",
        dataIndex: "level",
        width: "10%",
        editable: true,
      },
      {
        title: "Category",
        dataIndex: "category",
        width: "10%",
        editable: true,
      },
      {
        title: "H??nh ?????ng",
        dataIndex: "operation",
        render: (text, record) => {
          return this.state.dataSource.length >= 1 ? (
            <Space size="middle">
              <Button>
                <Link to={`courses/update/${record.key}`}>C???p nh???t</Link>
              </Button>
              <Popconfirm
                title="Ch???c ch???n x??a?"
                onConfirm={() => this.handleDelete(record.key)}
              >
                <Button danger>X??a</Button>
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
    this.props.requestCoursesDash();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.courses.length !== this.state.dataSource.length) {
      this.setState({
        dataSource: nextProps.courses.map((course) => ({
          key: course.id,
          title: course.title,
          duration: course.duration,
          skill: course.skills.name,
          level: course.level,
          category: course.categories.name,
          language: course.languages.name,
          job: course.jobs.name,
        })),
      });
    }
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.props.deleteCourses(key);
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
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
          <Link to="courses/create">Th??m m???i kh??a h???c</Link>
        </Button>
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

export default CourseDash;
