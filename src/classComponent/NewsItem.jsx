import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class NewsItem extends Component {
  render() {
    return (
    <>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
 
 <div className="card">
  <img src={this.props.pic?this.props.pic:"images/noImages.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <div className='source'>
        <p>{this.props.source}</p>
        <p>{new Date(this.props.date).toLocaleDateString()}</p>
    </div>
    <p className="card-text">{this.props.description}</p>
    <Link to={this.props.url} target='_blank' rel='noreferrer' className="btn btn-primary">Read Full Articals</Link>
  </div>
</div>
</div>
         
    
    </>
    )
  }
}
