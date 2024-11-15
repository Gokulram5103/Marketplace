import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './button'; 
import { useAuth } from '../../utils/Authcontext';

const Header = () => {
  const navigate = useNavigate();
  const { user,logoutUser } = useAuth();

  

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div>
        <Link id="header-logo" to="/" className="text-xl font-semibold text-gray-900">
          LOGO
        </Link>
      </div>

      <nav className="flex items-center space-x-4">
        {user ? (
          <>
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900 font-medium">
              Profile
            </Link>
            <Button onClick={logoutUser} variant="primary" size="sm">
              Logout
            </Button>
          </>
        ) : (
          <Link to="/login" className="text-gray-700 hover:text-gray-900 font-medium">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
