import PropTypes from "prop-types";
import Link from "next/link";
import {Menu} from "antd";

const menus = [
  {
    label: (<Link href="/"><a>노드버드</a></Link>),
  },
  {
    label: (<Link href="/profile"><a>프로필</a></Link>)
  },
  {
    label: (<Link href="/signup"><a>회원가입</a></Link>)
  }
];

const AppLayout = ({children}) => {
  return (
    <div>
      <Menu mode="horizontal" items={menus}/>
      {children}
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppLayout;
