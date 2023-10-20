'use client';
import React from 'react';
import Layout from '../components/layout';
import Modal from '../components/modal';

const AdminLayout = () => {
  const dummyPosts = [
    {
      title: 'test title 1',
      content: 'test content 1',
      voiceCover: 'voice cover 1',
      gendre: 'narodna',
      date: 'date 1',
    },
    {
      title: 'test title 1',
      content: 'test content 1',
      voiceCover: 'voice cover 1',
      gendre: 'narodna',
      date: 'date 1',
    },
    {
      title: 'test title 1',
      content: 'test content 1',
      voiceCover: 'voice cover 1',
      gendre: 'narodna',
      date: 'date 1',
    },
  ];

  /*
   page should contain following elements: 
   button -> create post (placeholder: create)
   list of the posts with update and delete func
   create opens a modal with fields: title, content, upload sound, gendre, date
 */

  return (
    <Layout>
      <div>
        <div>
          <Modal modalId='' />
        </div>
        <div>list of all posts</div>
      </div>
    </Layout>
  );
};

export default AdminLayout;
