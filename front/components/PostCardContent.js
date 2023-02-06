import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => {
  const hashTagRegex = /(#[^\s#]+)/g;
  return (
    <div>
      {
        postData.split(hashTagRegex).map((content, index) => {
          if (hashTagRegex.test(content)) {
            return <Link key={index} href={`/hastag/${content.slice(1)}`}><a>{content}</a></Link>;
          }

          return content;
        })
      }
    </div>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
