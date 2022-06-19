import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

function List({data , getid}) {

  const changeHandle = () => {
    console.log({getid});
  }

  return (
    <div>
      {data.map((v, i) => {
        return (
          <Card>
            <CardBody>
              <CardTitle tag="h5">{v.id}</CardTitle>
              <CardTitle tag="h5">{v.name}</CardTitle>
              <CardTitle tag="h5">{v.quantity}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {v.price}
              </CardSubtitle>
              <CardText>{v.expiry}</CardText>
            </CardBody>
            {/* <Button onClick={() => changeHandle()}>
              Click
            </Button> */}
          </Card>
        );
      })}
    </div>
  );
}

export default List;

