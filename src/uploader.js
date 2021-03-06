import React from "react";
import axios from "./axios";

export default class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      uploaderVisible: false,
      error: false,
      imageUploading: false,
      inProp: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    console.log("props", this.props.finishedUploading);
  }

  closeModal() {
    this.setState({ uploaderVisible: false });
  }

  componentDidMount() {
    this.setState({ uploaderVisible: true });
  }

  //handleChange for file upload
  handleChange(event) {
    this.setState({
      uploaderVisible: true
    });

    const formData = new FormData();

    this.setState({ file: event.target.files[0] }, () => {
      formData.append("file", this.state.file);
    });

    this.setState({ imageUploading: true });

    axios
      .post("/upload", formData)
      .then(({ data }) => {
        if (data.error) {
          this.setState({ imageUploading: false });
          this.setState({ error: true });
          return;
        } else {
          this.setState({ error: false });
          this.props.updateProfilePic(data);
          this.setState({ uploaderVisible: false });
        }
      })
      .catch(function(error) {
        this.state({ error: true });
      });
  }

  render() {
    return (
      <div>
        {this.state.uploaderVisible === true && (
          <div className="modal-background">
            <div className="uploader-modal">
              <div className="close-info" onClick={this.closeModal}>
                X
              </div>
              <span className="uploader">
                please upload your profile picture
              </span>
              <form>
                <label htmlFor="file-upload" className="custom-file-upload">
                  UPLOAD IMAGE
                  <img
                    className="logo-upload"
                    src="download-file.svg"
                    alt="download"
                  />
                </label>
                <input
                  onChange={this.handleChange}
                  id="file-upload"
                  className="file"
                  type="file"
                  name="file"
                  accept="image/*"
                />
              </form>
              {this.state.error && (
                <span className="error">
                  Error: please make try again with a file below 800kb.
                </span>
              )}
              {this.state.imageUploading && (
                <span className="image-uplaoding">image uploading...</span>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
