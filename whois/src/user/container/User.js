import React, { useEffect } from "react";
import {
  Col,
  Descriptions,
  PageHeader,
  Row,
  Space,
  Spin,
  Typography,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions, Types } from "../state";
import useFetchInfo from "../../common/hook/useFetchInfo";

const User = ({ match }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  const user = useSelector((state) => state.user.user);

  // const name = match.params.name;
  useEffect(() => {
    dispatch(actions.fetchUser(name));
  }, [name]);

  // const isFetched = true;
  const { isFetched, isSlow } = useFetchInfo(Types.FetchUser);

  return (
    <Row justify="center">
      <Col xs={24} md={20} lg={14}>
        <PageHeader
          onBack={() => navigate(-1)}
          title={
            <Space>
              사용자 정보
              {isSlow && <Spin size="small" />}
            </Space>
          }
        >
          {user && (
            <Descriptions layout="vertical" bordered column={1}>
              <Descriptions.Item label="이름">
                <Typography.Text>{user.name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="소속">
                {user.department}
              </Descriptions.Item>
              <Descriptions.Item label="태그">{user.tag}</Descriptions.Item>
              <Descriptions.Item label="수정 내역">수정 내역</Descriptions.Item>
            </Descriptions>
          )}
          {!user && isFetched && (
            <Typography.Text>존재하지 않는 사용자입니다.</Typography.Text>
          )}
        </PageHeader>
      </Col>
    </Row>
  );
};

export default User;
