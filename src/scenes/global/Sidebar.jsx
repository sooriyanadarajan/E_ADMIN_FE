import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../assests/logo.png';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = (id) => {
    setShowDropdown(showDropdown === id ? null : id);
  };

  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <div className="sidebar-header">
        <div className={`toggle-sidebar ${showSidebar ? 'logo-hide' : 'logo-show'}`} onClick={toggleSidebar}>
          <img src={logo} className="logo" />
          <i className={`${showSidebar ? 'icon-menu-left' : 'icon-menu-left rotate'} toggle-icon`}></i>
        </div>
      </div>
      <div className="sidebar-menu">
        <ul>
          <p>Menu Menu</p>
          <li>
            <a href="#" className="active">
              <div className='iconandtext'>
                <i className="icon-grid"></i> Dashboard
              </div>
            </a>
          </li>
          <p>All Pages</p>
          <li onClick={() => toggleDropdown('product')}>
            <a className={`${showDropdown === 'product' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-shopping-cart"></i> Product
              </div>
              <i className={`chevron ${showDropdown === 'product' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'product' ? 'show' : ''}`}>
              <li><a href="#">Product List</a></li>
              <li><a href="#">Add Product</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Category')}>
            <a className={`${showDropdown === 'Category' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-layers"></i> Category
              </div>
              <i className={`chevron ${showDropdown === 'Category' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Category' ? 'show' : ''}`}>
              <li><a href="#">Category List</a></li>
              <li><a href="#">Add Category</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Roles')}>
            <a className={`${showDropdown === 'Roles' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-user-plus"></i> Roles
              </div>
              <i className={`chevron ${showDropdown === 'Roles' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Roles' ? 'show' : ''}`}>
              <li><a href="#">All Roles</a></li>
              <li><a href="#">Create Role</a></li>
              <li><a href="#">Permessions</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Users')}>
            <a className={`${showDropdown === 'Users' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-user"></i> Users
              </div>
              <i className={`chevron ${showDropdown === 'Users' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Users' ? 'show' : ''}`}>
              <li><a href="#">All Users</a></li>
              <li><a href="#">Create User</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Orders')}>
            <a className={`${showDropdown === 'Orders' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-layers"></i> Orders
              </div>
              <i className={`chevron ${showDropdown === 'Orders' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Orders' ? 'show' : ''}`}>
              <li><a href="#">Order list</a></li>
              <li><a href="#">Order Details</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('PickUp Orders')}>
            <a className={`${showDropdown === 'PickUp Orders' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-layers"></i> PickUp Orders
              </div>
              <i className={`chevron ${showDropdown === 'PickUp Orders' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'PickUp Orders' ? 'show' : ''}`}>
              <li><a href="#">Orders List</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Delivery Orders')}>
            <a className={`${showDropdown === 'Delivery Orders' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-layers"></i> Delivery Orders
              </div>
              <i className={`chevron ${showDropdown === 'Delivery Orders' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Delivery Orders' ? 'show' : ''}`}>
              <li><a href="#">Orders List</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Reviews')}>
            <a className={`${showDropdown === 'Reviews' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-layers"></i> Reviews
              </div>
              <i className={`chevron ${showDropdown === 'Reviews' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Reviews' ? 'show' : ''}`}>
              <li><a href="#">Reviews List</a></li>
              <li><a href="#">Review Details</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Payments')}>
            <a className={`${showDropdown === 'Payments' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-layers"></i> Payments
              </div>
              <i className={`chevron ${showDropdown === 'Payments' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Payments' ? 'show' : ''}`}>
              <li><a href="#">Payment List </a></li>
              <li><a href="#">Payment Details</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Refund')}>
            <a className={`${showDropdown === 'Refund' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-layers"></i> Refund
              </div>
              <i className={`chevron ${showDropdown === 'Refund' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Refund' ? 'show' : ''}`}>
              <li><a href="#">Refund List</a></li>
              <li><a href="#">Refund Details</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Reports')}>
            <a className={`${showDropdown === 'Reports' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-clipboard"></i> Reports
              </div>
              <i className={`chevron ${showDropdown === 'Reports' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Reports' ? 'show' : ''}`}>
              <li><a href="#">All Reports</a></li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown('Home Page Settings')}>
            <a className={`${showDropdown === 'Home Page Settings' ? 'active' : ''}`} href="#">
              <div className='iconandtext'>
                <i className="icon-layers"></i> Home Page Settings
              </div>
              <i className={`chevron ${showDropdown === 'Home Page Settings' ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
            </a>
            <ul className={`dropdown-menu ${showDropdown === 'Home Page Settings' ? 'show' : ''}`}>
              <li><a href="#">Banners</a></li>
              <li><a href="#">Top Products</a></li>
              <li><a href="#">Best Selling Products</a></li>
              <li><a href="#">Special Offers</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;