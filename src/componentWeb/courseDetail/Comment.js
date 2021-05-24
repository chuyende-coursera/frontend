import React, { Fragment } from "react";
import "antd/dist/antd.css";
import { Comment, Avatar, Form, Button, Rate, Input } from "antd";
import moment from "moment";
import "./review.css";
const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <Form name="review" onFinish={onSubmit}>
    <h4>Mời bạn bình luận về khóa học: </h4>
    <Form.Item
      name="comment"
      rules={[
        {
          required: true,
          message: "Vui lòng nhập bình luận!",
          type: "string",
        },
      ]}
    >
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item
      name="rate"
      label="Rate: "
      rules={[
        {
          required: true,
          message: "Vui lòng chọn đánh giá!",
          type: "number",
        },
      ]}
    >
      <Rate />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} type="primary">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

class CommentCourse extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: "",
  };

  handleSubmit = (value) => {
    console.log(value);
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    this.props.requestCommentByUserId({
      status: 3,
      coursesId: this.props.coursesId,
      review: value.rate,
      comment: value.comment,
    });
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { submitting, value } = this.state;

    return (
      <Comment
        content={
          <>
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          </>
        }
      />
    );
  }
}

export default CommentCourse;
