import PropTypes from "prop-types";
import Link from "next/link";
import {Menu, Input, Col, Row} from "antd";

const {Search} = Input;

const menus = [
  {
    label: (<Link href="/"><a>노드버드</a></Link>),
  },
  {
    label: (<Link href="/profile"><a>프로필</a></Link>)
  },
  {
    label: <Search enterButton style={{ verticalAlign: 'middle'}}/>
  },
  {
    label: (<Link href="/signup"><a>회원가입</a></Link>)
  }
];

const AppLayout = ({children}) => {
  return (
    <div>
      <Menu mode="horizontal" items={menus}/>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
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
