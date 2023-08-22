import { AuthContext } from '@/context/AuthContext';
import { ViewContext } from '@/context/ViewContext';
import { useContext } from 'react';
import styles from '../../../global/Header.module.css';
import { AiOutlineUser } from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io"
// import Dropdown from 'react-bootstrap/Dropdown';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const Auth = () => {
    const { setLoginModal } = useContext(ViewContext);
    const {user} = useContext(AuthContext);

    const LogOut = () => {
        
    }

    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '4',
          danger: true,
          label: <span onClick={LogOut}>Logout</span>,
        },
    ];



  return (
        <div className={styles.loginSign+' '+'dFlex algCenter noneXs'}>
            {
                !user ?
                // <Dropdown>
                //     <Dropdown.Toggle variant="success" id="dropdown-basic">
                //      <span><AiOutlineUser /></span>
                //      <span>{user.first_name}</span>
                //      <span><IoIosArrowForward /></span>
                //     </Dropdown.Toggle>

                //     <Dropdown.Menu>
                //         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                //         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                //         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                //     </Dropdown.Menu>
                // </Dropdown>

                <Dropdown
                menu={{
                  items,
                }}
                 >
                <a 
                className={styles.userLogged}
                onClick={(e) => e.preventDefault()}>
                      <span><AiOutlineUser /></span>
                      {/* <span>{user.first_name}</span> */}
                      <span><IoIosArrowForward /></span>
                </a>
                </Dropdown>
                    
                
                :
                <>
                    <button onClick={() => setLoginModal(true)} className={'btnStyle btnNoneStyle'}>Login</button>
                    <button className={'btnStyle'+' '+styles.singBtn}>Sign Up</button>
                </>
            }

<>
                    <button onClick={() => setLoginModal(true)} className={'btnStyle btnNoneStyle'}>Login</button>
                    <button className={'btnStyle'+' '+styles.singBtn}>Sign Up</button>
                </>
            
            
        </div>
  )
}

export default Auth