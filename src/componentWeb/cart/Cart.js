import React, { useEffect, useState } from "react";
import { List, Avatar, Button, notification } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import FooterCourse from "../footer/FooterCourse";

function Cart({
  requestUserCourse,
  userCourse,
  currentUser,
  requestDeleteUserCourse,
  requestUpdateUserCourseByUserId,
  requestCurrentUser,
}) {
  const [listData, setListData] = useState([]);
  const [costOfCart, setCostOfCart] = useState(0);

  useEffect(() => {
    requestCurrentUser();
  }, [requestCurrentUser]);

  useEffect(() => {
    console.log("currentUser: ", currentUser);
    if (Object.keys(currentUser).length > 0) {
      requestUserCourse({ usersId: currentUser.id, status: 0 });
    }
  }, [requestUserCourse, currentUser]);

  useEffect(() => {
    const data = [];
    let tempCostOfCart = 0;
    userCourse.forEach((element) => {
      tempCostOfCart += parseInt(element.courses.cost);
      data.push({
        title: element.courses.title,
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description: "Gía khóa học: " + element.courses.cost + "$",
        id: element.id,
        // content:
        //   "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      });
    });
    setCostOfCart(tempCostOfCart);
    setListData(data);
  }, [userCourse]);

  console.log("userCourse: ", userCourse);

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
      <FooterCourse />
    </div>
  );
}

export default Cart;
