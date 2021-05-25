import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './course.css';
import viMessage from '../../locales/vi';
import history from '../../store/history';

import { Form, notification, Input, Select, Button, InputNumber } from 'antd';

const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 4,
		},
	},
	wrapperCol: {
		xs: {
			span: 24,
		},
		sm: {
			span: 16,
		},
	},
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

function AddCourse(props) {
	const [form] = Form.useForm();
	const {
		requestJobsDash,
		requestLanguagesDash,
		requestSkillsDash,
		requestTopics,
		requestCreateCoursesDash,
		topics,
		skills,
		languages,
		jobs,
	} = props;
	console.log('props add course', props);
	useEffect(() => {
		requestLanguagesDash();
		requestJobsDash();
		requestSkillsDash();
		requestTopics();
	}, [requestLanguagesDash, requestJobsDash, requestSkillsDash, requestTopics]);

	// useEffect(() => {

	// }, [requestLanguagesDash]);

	return (
		<div className="container m-auto">
			<h3 className="text-center">Thêm Mới Khóa Học</h3>
			<Form
				{...formItemLayout}
				form={form}
				className="formCenter"
				name="addcourse"
				onFinish={requestCreateCoursesDash}
				scrollToFirstError
			>
				<Form.Item
					name="title"
					label="Tiêu Đề"
					rules={[
						{
							type: 'string',
							message: viMessage['app.courses.validate.title'],
						},
						{
							required: true,
							message: viMessage['app.courses.title'],
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="description"
					label="Miêu tả khóa học"
					rules={[
						{
							type: 'string',
							message: viMessage['app.courses.validate.description'],
						},
						{
							required: true,
							message: viMessage['app.courses.title'],
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name="duration"
					label="Thời lượng"
					rules={[
						{
							required: true,
							message: viMessage['app.courses.duration'],
						},
						{
							type: 'string',
							message: viMessage['app.courses.validate.duration'],
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name="languagesId"
					label="Ngôn Ngữ"
					rules={[
						{
							required: true,
							message: viMessage['app.courses.language'],
						},
						{
							type: 'string',
							message: viMessage['app.courses.validate.language'],
						},
					]}
				>
					<Select
						showSearch
						placeholder="Chọn Ngôn ngữ"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						{languages.map((language) => (
							<Option key={language.id} value={language.id}>
								{language.name}
							</Option>
						))}
					</Select>
				</Form.Item>

				<Form.Item
					name="jobsId"
					label="Hệ Nghề Nghiệp"
					rules={[
						{
							required: true,
							message: viMessage['app.courses.job'],
						},
						{
							type: 'string',
							message: viMessage['app.courses.validate.job'],
						},
					]}
				>
					<Select
						showSearch
						placeholder="Chọn Nghề Nghiệp tương ứng"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						{jobs.map((job) => (
							<Option key={job.id} value={job.id}>
								{job.name}
							</Option>
						))}
					</Select>
				</Form.Item>
				<Form.Item
					name="cost"
					label="Giá khóa học"
					rules={[
						{
							type: 'number',
							min: 0,
						},
					]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item
					name="skillsId"
					label="Kỹ Năng"
					// rules={[
					// 	{
					// 		required: true,
					// 		message: viMessage['app.courses.skill'],
					// 	},
					// 	{
					// 		type: 'string',
					// 		message: viMessage['app.courses.validate.skill'],
					// 	},
					// ]
					// }
				>
					<Select
						showSearch
						placeholder="Chọn Kỹ Năng Khóa Học"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						{skills.map((skill) => {
							console.log('skill', skill);
							return (
								<Option key={skill.id} value={skill.id}>
									{skill.name}
								</Option>
							);
						})}
					</Select>
				</Form.Item>

				<Form.Item
					name="level"
					label="Trình Độ"
					rules={[
						{
							required: true,
							message: viMessage['app.courses.validate.level'],
						},
						{
							type: 'string',
							message: viMessage['app.courses.validate.level'],
						},
					]}
				>
					<Select
						showSearch
						placeholder="Chọn Trình Độ"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option value="1">Cơ bản</Option>
						<Option value="2">Trung Bình</Option>
						<Option value="3">Nâng Cao</Option>
					</Select>
				</Form.Item>

				<Form.Item
					name="categoriesId"
					label="Chuyên Mục"
					// rules={[
					// 	{
					// 		required: true,
					// 		message: viMessage['app.courses.validate.categories'],
					// 	},
					// 	{
					// 		type: 'string',
					// 		message: viMessage['app.courses.validate.categories'],
					// 	},
					// ]}
				>
					<Select
						showSearch
						placeholder="Chọn Chuyên Mục"
						optionFilterProp="children"
						filterOption={(input, option) =>
							option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						}
					>
						{topics.map((topic) => {
							return topic.categories.map((category) => (
								<Option key={category.id} value={category.id}>
									{category.name}
								</Option>
							));
						})}
					</Select>
				</Form.Item>

				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">
						Thêm khóa học
					</Button>
					<Button className="ml-3" type="outline" onClick={() => history.goBack()}>
						Trở lại
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default AddCourse;
