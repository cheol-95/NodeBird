import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
  isLoggedIn: true,
  imagePath: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: '첫 닉넴',
      },
      content: '첫 번째 게시글',
      img:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAACpCAMAAACrt4DfAAAAe1BMVEURERH///8AAAAODg4LCwsGBgbs7OzV1dWWlpbk5OQICAj6+vo2NjbExMS0tLSjo6MiIiJJSUlQUFAVFRWioqLz8/NxcXHf39/Z2dmqqqpBQUFra2tlZWXLy8uFhYU9PT18fHxMTEwoKChYWFiKioqwsLCamprGxsYvLy8Cbkz3AAACjElEQVR4nO3Zh5KCMBSFYXPBir3jWlh11fd/wuUidqzLzDLk/x4gY87kJDEUCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgGTf9IWu19MfMAOmkm5UjIt1uL9Uxs0H6PSe1wTSmwrzhd4upDZkd0q9IOiNpTO70p+T125LLpAIjaSyqYpjTd6VszCgIA0thwMyRlfH/vKh0OdXnjYExptmRVJLPHll6pv6nsmhMMmyWwpjMoNKTlMqcOY6UTPXzyTnaulVrZCLjYU6bF5GG+bh/tTCmSWXm7XOKmpfuj8sUWYdzHH4wQ23dLog2p0gpx82LyESnuXh3q9LN6eunao7KuW6eciSabvuNWUabU7c/Nmeai7yeeSfi60y93qtRuXolWB83p7h5ku/mRfb1M2b5SlS6OS2DRslc0OblfUEpiWvUeboqdHOa+lVzJedn3olM4xk//geoV4LvTfk6pvC26VoSVBjVYZXcv4Lq5rRbb72bnMz4K+9n3pnjojImSMpKN6d2/H/lpnkTaxaUktlp6vXrievmtPJHSTHl/7Z5zW2fzd7rnj0v6c2pUykntE6VbWrenswvK1WXg/gxJZENt80bsr3u1dbfbPzGODGiuHmSy7fNJxy5u3Lu0OZZt6CUu3wvKMvOvHPSeSOnUqVgbVDRi/o7zbPszLvwclR65v33j/1fxfqrzbPwzLv0ygloe/MObu5VSc2z8nJw4/FmZelt8w79rPWgeSyoE/1YmsSz+LZ5T9G5eQEOF1Rgw1eFt9WkdZXTuk3zkjlSiN+lvMGsNRXuBg/o43l7MdlFD1Wsp2fcYtElJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnfgF1AxYyGda22QAAAABJRU5ErkJggg==',
    },
  ],
};

const PostForm = () => {
  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {dummy.imagePath.map((v) => {
          return (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};
export default PostForm;
