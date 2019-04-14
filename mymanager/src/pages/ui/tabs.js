import React from "react";
import { Card, Button, Tabs, message, Icon } from "antd";

import "./ui.less";

export default class Tab extends React.Component {
  newTabIndex = 0;
  componentWillMount() {
    const panes = [
      {
        title: "Tab 1",
        content: "Tab 1",
        key: "1"
      },
      {
        title: "Tab 2",
        content: "Tab 2",
        key: "2"
      },
      {
        title: "Tab 3",
        content: "Tab 3",
        key: "3"
      }
    ];
    this.setState({
      activeKey: panes[0].key, //当前需要激活哪一个页签
      panes
    });
  }
  callback = key => {
    message.info(key);
  };
  //动态页签的点击事件
  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  //动态添加的方法
  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: "New Tab", content: "New Tab Pane", key: activeKey });
    this.setState({ panes, activeKey });
  };
  //动态删除的方法
  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
  render() {
    return (
      <div>
        <Card title="Tab页签" className="card=wrap">
          {/* defaultActiveKey指定默认打开哪个页签，分别对应下面的页签key */}
          <Tabs defaultActiveKey="1 " onChange={this.callback}>
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2" disabled>
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图标的页签" className="card=wrap">
          {/* defaultActiveKey指定默认打开哪个页签，分别对应下面的页签key */}
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            {/* Icon标签需要包裹在span标签中，react规定只能返回一个跟组件 */}
            <Tabs.TabPane
              tab={
                <span>
                  <Icon type="plus" />
                  Tab 1
                </span>
              }
              key="1"
            >
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <Icon type="edit" />
                  Tab 2
                </span>
              }
              key="2"
            >
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span>
                  <Icon type="delete" />
                  Tab 3
                </span>
              }
              key="3"
            >
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </Card>
        <Card title="动态Tab页签" className="card=wrap">
          {/* defaultActiveKey指定默认打开哪个页签，分别对应下面的页签key */}
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            // 设置页签为可编辑页签
            type="editable-card"
            //新增和删除页签的回调，在 type="editable-card" 时有效
            onEdit={this.onEdit}
          >
            {this.state.panes.map(panel => {
              return <Tabs.TabPane tab={panel.title} key={panel.key} />;
            })}
          </Tabs>
        </Card>
      </div>
    );
  }
}
