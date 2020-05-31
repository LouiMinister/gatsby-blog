/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';

import { Link, graphql } from 'gatsby';

const gitGrass = ({ data }) => {

  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다
    window.Kakao.init("3717e3c6ece2473246edb42f018badd9");
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '테스트 타이틀',
        description: '카카오 링크 테스트',
        imageUrl:
          'https://b.allthepics.net/bmo-rain.jpg',
        link: {
          webUrl: 'https://www.louiminister.me/gitgrass',
          mobileWebUrl: 'https://www.louiminister.me/gitgrass',
          androidExecParams: 'test',
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '메인으로 이동',
          link: {
            mobileWebUrl: 'https://www.louiminister.me/gitgrass',
          },
        },
        {
          title: '테스트 페이지로 이동',
          link: {
            mobileWebUrl: 'https://www.louiminister.me/gitgrass',
          },
        },
      ],
      success: function(response) {
        console.log(response);
      },
      fail: function(error) {
        console.log(error);
      }
    });
  },[]);

  return(
  <div className="container">
    <div className="row">
      <div className="col">
        <h4>잘못된 페이지입니다.!</h4>
        <a id="kakao-link-btn">카카오링크</a>
        {/*{data.allSitePage.edges.map(page => (*/}
        {/*  <Link to={page.node.path} href={page.node.path} key={page.node.path}>*/}
        {/*    <li>{page.node.path}</li>*/}
        {/*  </Link>*/}
        {/*))}*/}
      </div>
    </div>
  </div>
  );
}

export default gitGrass;
