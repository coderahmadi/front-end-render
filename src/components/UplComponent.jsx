import axios from "../utils/axiosApiInstance";
import { useState, useEffect } from "react";
import {
  CardGroup,
  Card,
  CardBody,
  CardSubtitle,
  Button,
  Input,
} from "reactstrap";

const UplComponent = () => {
  const imgStyle = {
    width: "12rem",
    height: "12rem",
  };
  const [posts, setPosts] = useState([]);
  const [response, setResponse] = useState({});

  useEffect(() => {
    getFiveLatest();
  }, [response]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    try {
      const res = await axios.post(
        `${axios.defaults.baseURL}/api/uploadImage`,
        data
      );
      setResponse(res.data.data);
      console.log("NEW Upload..!", res.data.data);
    } catch (error) {
      console.log(error.toString());
    }
  };

  const getFiveLatest = async () => {
    try {
      let posts = await axios.get(
        `${axios.defaults.baseURL}/api/recentUploads`
      );
      setPosts(posts.data);
    } catch (error) {
      console.log("ERR", error.toString());
    }
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Input required name="title" id="title" placeholder="Image Title.." />
        <br />
        <Input required type="file" name="pic" id="pic" />
        <br />
        <Button type="submit" color="primary" outline>
          submit
        </Button>
      </form>
      <br /> <hr />
      <section>
        <CardGroup>
          {posts.map((element) => (
            <Card
              key={element.filename}
              style={{
                width: "18rem",
              }}
            >
              <img
                alt="Sample"
                src={
                  `${axios.defaults.baseURL}` + `/api/getImgById/` + element._id
                }
                style={imgStyle}
              />
              <CardBody>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {element.tags[0]}
                </CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </CardGroup>
      </section>
    </>
  );
};
export default UplComponent;
