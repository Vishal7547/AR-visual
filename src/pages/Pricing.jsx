import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { CiCircleQuestion } from "react-icons/ci";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IoCheckmark } from "react-icons/io5";
const Pricing = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <Container maxWidth="4">
            <Box
              sx={{ bgcolor: "#F4F4F4", height: "100vh" }}
              className="w-100 mx-5 my-5"
            >
              <div className="containercard">
                <div className="containercarditems mt-5">
                  <Card sx={{ minWidth: 275 }} className="cardpricing w-50 mx-5">
                    <CardContent>
                      <div className="basicardcontent">
                        <span>Basic</span>
                      </div>
                      <div className="paracarde">
                        <p>Idea for those who've already got their Website up and running and are seeking assistance to enhance and update it further.</p>
                      </div>
                      <div className="mothhcardcnt">
                        <span>1 month</span>
                      </div>
                      <div className="rupeecardcnt">
                        <span>₹ 49</span>
                      </div>
                      <div className="linecard w-75 my-3"></div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>3-5 day turnaround</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Native Development</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Task delivered One-by-one</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Dedicated Dashboard</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Update via Dashboard & Slack</span>
                      </div>
                      <div className="linecard w-75 mt-3"></div>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Register</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="containercarditems mt-5">
                  <Card sx={{ minWidth: 275 }} className="cardpricing w-75 mx-5">
                    <CardContent>
                      <div className="basicardcontent">
                        <span>Pro Plus</span>
                      </div>
                      <div className="paracarde">
                        <p>Idea if you want to buildor scale your website fast,with the statergy calss included.</p>
                      </div>
                      <div className="mothhcardcnt">
                        <span>6 month</span>
                      </div>
                      <div className="rupeecardcnt">
                        <span>₹ 499 </span>
                      </div>
                      <div className="linecard w-75 my-3"></div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>3-5 day turnaround</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Native Development</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Task delivered One-by-one</span>
                      </div>
                      
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Dedicated Dashboard</span>
                      </div>
                    
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Task delivered One-by-one</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Dedicated Dashboard</span>
                      </div>
                      <div className="linecard w-75 mt-3"></div>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Register</Button>
                    </CardActions>
                  </Card>
                </div>
                <div className="containercarditems mt-5">
                  <Card sx={{ minWidth: 275 }} className="cardpricing w-50 mx-5">
                    <CardContent>
                      <div className="basicardcontent">
                        <span>Premium</span>
                      </div>
                      <div className="paracarde">
                        <p>If these plans don't fit,let's create one that suits.Customize your subscription for a perfect fit,bigger or smaller!</p>
                      </div>
                      <div className="mothhcardcnt">
                        <span>1 year</span>
                      </div>
                      <div className="rupeecardcnt">
                        <span>₹ 1000</span>
                      </div>
                      <div className="linecard w-75 my-3"></div>
                            <div className="divcontent">
                      <IoCheckmark />
                      <span>3-5 day turnaround</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Native Development</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Task delivered One-by-one</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Dedicated Dashboard</span>
                      </div>
                      <div className="divcontent">
                      <IoCheckmark />
                      <span>Update via Dashboard & Slack</span>
                      </div>
                      <div className="linecard w-75 mt-3"></div>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Register</Button>
                    </CardActions>
                  </Card>
                </div>
              </div>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
