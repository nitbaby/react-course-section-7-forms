import React from 'react';

class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  state = {
    spans: 1
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
    console.log(this.imageRef.current.clientHeight);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
    const spans = Math.ceil(this.imageRef.current.clientHeight / 10 + 1);
    this.setState({
      spans
    })
  }

  render() {
    const {description, urls} = this.props.image;
    const {spans} = this.state;
    return (
      <div style={{gridRowEnd: `span ${spans}`}}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}/>
      </div>
    )
  }
}

export default ImageCard;
