import React from 'react';
import { SectionTitle } from './../components/Global/SectionTitle';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { Layout } from './../components/Layout/Layout';
import { MapIcon } from './../components/Icons/MapIcon';
import { SmartPhoneIcon } from './../components/Icons/SmartPhoneIcon';
import { MessageIcon } from './../components/Icons/MessageIcon';
import { ContactInfoCard } from './../components/ContactInfoCard/ContactInfoCard';
import { ContactForm } from './../components/ContactForm/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapIcon color={'#f1a002'} />,
      title: 'Address',
      text: 'Lorem Ipsum is simply dummy text of the printing',
    },
    {
      icon: <SmartPhoneIcon color={'#f1a002'} />,
      title: 'Phone Number',
      text: 'Lorem Ipsum is simply dummy text of the printing',
    },
    {
      icon: <MessageIcon color={'#f1a002'} />,
      title: 'E-mail Address',
      text: 'Lorem Ipsum is simply dummy text of the printing',
    },
  ];
  return (
    <Layout>
      <div className="mt-12">
        <div className="container">
          <Breadcrumb paths="contact" />
          <SectionTitle title="Contact Info" />
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <div className="flex items-center justify-center gap-4">
            {contactInfo?.map((info) => (
              <ContactInfoCard info={info} key={info?.title} />
            ))}
          </div>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
