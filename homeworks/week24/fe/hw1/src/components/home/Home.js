import React, {Component} from 'react';
import Loading from '../utils/loading/Loading';

class Home extends Component {

  componentDidMount() {
    const { getLatestPosts } = this.props;
    getLatestPosts();
  }

  render() {
    const { isLoading, latestPosts, history } = this.props;
    
    if (isLoading) return <Loading />;
    return (
      <div>
        
        <div className="post-item col-md-10 mx-auto mt-3">
          <img src="https://images.unsplash.com/photo-1562332651-12481360937c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" height="550px" width="100%" alt="" />
          <h3>New Features: </h3>
        </div>
        
        <div className="container col-md-10 mt-2">
          <div className="row post-list">     
          
            {latestPosts.map((item)=> (
              <div className="post-item col-md-3  mt-3 mb-4" key={item.id} onClick={() => {
                history.push('/post/' + item.id); //一個換頁的 function
              }}>
                <h4>{item.title}</h4>
                <div className="post-item__author">
                Author: {item.author} 
                </div>
                <div className="post-item__body">
                {item.body} 
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    )
  }
}

export default Home;