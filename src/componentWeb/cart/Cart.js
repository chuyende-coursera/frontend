import React, { useEffect } from "react";
import { List, Avatar, Button, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

let listData = [];
let costOfCart = 0;
function Cart({
  requestUserCourse,
  userCourse,
  requestBuyCourse,
  requestDeleteUserCourse,
  requestUpdateUserCourseByUserId,
  requestCurrentUser,
  currentUser,
}) {
  console.log("userCourse: ", userCourse);
  console.log("currentUser: ", currentUser);

  userCourse.forEach((element) => {
    costOfCart += parseInt(element.courses.cost);
    listData.push({
      title: element.courses.title,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description: "Gía khóa học: " + element.courses.cost + "$",
      id: element.id,
      // content:
      //   "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  });

  const deleteBuyCourse = (id) => {
    console.log("id: ", id);
    listData = listData.filter((data) => data.id !== id);
    console.log("listData: ", listData);
  };
  useEffect(() => {
    requestCurrentUser();
    requestUserCourse({ status: 0 });
  }, [requestUserCourse, requestCurrentUser]);

  return (
    <div className="container">
      <List
        itemLayout="horizontal"
        size="large"
        header={<h3>Giỏ hàng của bạn</h3>}
        footer={
          <div className="float-right">
            {`${costOfCart} $`}
            {"     "}
            <Button
              size="large"
              type="primary"
              onClick={() => {
                if (costOfCart === 0) {
                  notification["error"]({
                    message: "Bạn chưa chọn khóa học nào để thanh toán!",
                    description: "",
                  });
                } else if (costOfCart > 0) {
                  requestUpdateUserCourseByUserId({ status: 1 });
                }
              }}
            >
              Thanh Toán
            </Button>
          </div>
        }
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        bordered
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <a
                key="delete"
                href="/cart"
                onClick={() => requestDeleteUserCourse(item.id, { status: 3 })}
              >
                <DeleteOutlined />
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href="">{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}

export default Cart;
