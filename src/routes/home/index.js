/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{news{title,link,contentSnippet}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data || !data.news) throw new Error('Failed to load the news feed.');

    const columnNames = ['#', '名称', '最后修改时间', '状态', '操作'];

    const columnData = [{
      name: '2016春季西南地区校招笔试题模板',
      lastModifyData: '2016-04-03',
      status: '未发布',
      operation: ['发布', '编辑', '查看', '删除'],
    }, {
      name: '2016春季西南地区校招笔试题模板',
      lastModifyData: '2016-04-12',
      status: '已发布',
      operation: ['复制', '查看'],
    }, {
      name: '2016春季西南地区校招笔试题模板',
      lastModifyData: '2016-04-21',
      status: '已发布',
      operation: ['复制', '查看'],
    }];

    return <Home columnNames={columnNames} columnData={columnData} />;
  },

};
