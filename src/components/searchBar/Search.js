import React from 'react'
import {Input} from 'antd'
import { AudioOutlined } from '@ant-design/icons'

const Search = () => {
    const { Search } = Input;

    const onSearch = value => console.log(value);  
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
    return (
        <div>
              <Search
      placeholder="input search text"
      enterButton="Search"
      className="mb-4"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
        </div>
    )
}

export default Search
