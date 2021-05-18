import { useState } from 'react';

import { LoginTemplate } from '@/templates/index';
import { StickTopBackButton } from '@/organisms/index';

const intitalForm = {
  email: '',
  password: ''
};

const AdminPage = () => {
  const [formData, setFormData] = useState(intitalForm);

  const handleSubmit = () => {
    console.log('submit', formData);
  };

  const handleInputChange = ({ key, value }) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <>
      <StickTopBackButton />
      <LoginTemplate
        formData={formData}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default AdminPage;
