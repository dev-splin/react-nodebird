import PropTypes from "prop-types";
import Link from "next/link";
import {Menu, Input, Col, Row} from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import {useSelector} from "react-redux";

const {Search} = Input;

const SearchInput = styled(Search)`
  vertical-align: middle;
`

const menus = [
  {
    label: (<Link href="/"><a>노드버드</a></Link>),
  },
  {
    label: (<Link href="/profile"><a>프로필</a></Link>)
  },
  {
    label: <SearchInput enterButton/>
  },
  {
    label: (<Link href="/signup"><a>회원가입</a></Link>)
  }
];



const AppLayout = ({children}) => {
  // redux 데이터 가져오기
  const isLoggedIn = useSelector((state) => {

    return state.user.isLoggedIn;
  });

  return (
    <div>
      <Menu mode="horizontal" items={menus}/>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile/> : <LoginForm/>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* noreferrer noopener 참조랑 opener를 지워야 보안 상으로 안전함 */}
          <a href="https://splin.tistory.com/" target="_blank" rel="noreferrer noopener">Made By Splin</a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout;
