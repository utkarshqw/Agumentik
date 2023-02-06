import {
  Button,
  Img,
  Input,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const navigate = useNavigate()
    var x = JSON.parse(localStorage.getItem("contacts")) || []
  const [contact, setContact] = useState([]);
  const toast = useToast();
  var [update, setUpdate] = useState("");
  const handleupdate = (key) => {
    localStorage.setItem(key, update);
    setUpdate("");
    toast({
      title: "success",

      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

//  useEffect(()=>{
//   var x = localStorage.getItem([...x])
//   setContact(x)
//  },[])

  return (
    <>
    <Button colorScheme={"blue"} onClick={()=> navigate("/")}> Go to Home page</Button>
    <Tabs>
      <TabList>
        <Tab>Background image</Tab>
        <Tab>Social link</Tab>
        <Tab>navbar</Tab>
        <Tab>First box left hand side</Tab>
        <Tab>Second box right hand side</Tab>
        <Tab>Contacts</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
        <Textarea
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
            type="text"
          />
          <Button
            onClick={() => handleupdate("backgroundImage")}
            m="15px"
            colorScheme={"blue"}
          > change background  </Button>
        </TabPanel>


        <TabPanel>
          <Textarea
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
            type="text"
          />
          <Button
            onClick={() => handleupdate("facebook")}
            m="15px"
            colorScheme={"blue"}
          >
            facebook
          </Button>
          <Button
            onClick={() => handleupdate("linkedin")}
            m="15px"
            colorScheme={"blue"}
          >
            Linkedin
          </Button>
          <Button
            onClick={() => handleupdate("instagram")}
            m="15px"
            colorScheme={"blue"}
          >
            Instagram
          </Button>
        </TabPanel>

        <TabPanel>
          <Textarea
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
            type="text"
          />
          <Button
            onClick={() => handleupdate("logo")}
            m="15px"
            colorScheme={"blue"}
          >
            company logo
          </Button>
          <Button
            onClick={() => handleupdate("navtext1")}
            m="15px"
            colorScheme={"blue"}
          >
            first sentence
          </Button>
          <Button
            onClick={() => handleupdate("navtext2")}
            m="15px"
            colorScheme={"blue"}
          >
            second sentence
          </Button>
          <Button
            onClick={() => handleupdate("selecttext")}
            m="15px"
            colorScheme={"blue"}
          >
            select tag
          </Button>
        </TabPanel>

        <TabPanel>
          <Textarea
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
            type="text"
          />
          <Button
            onClick={() => handleupdate("firstline_first")}
            m="15px"
            colorScheme={"blue"}
          >
            First sentence
          </Button>
          <Button
            onClick={() => handleupdate("secondline_first")}
            m="15px"
            colorScheme={"blue"}
          >
            First word
          </Button>
          <Button
            onClick={() => handleupdate("secondline_remaining")}
            m="15px"
            colorScheme={"blue"}
          >
            Reamaining word{" "}
          </Button>
          <Button
            onClick={() => handleupdate("info")}
            m="15px"
            colorScheme={"blue"}
          >
            Info
          </Button>
        </TabPanel>

        <TabPanel>
          <Textarea
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
            type="text"
          />
          <Text
            textTransform={"uppercase"}
            fontSize="12px"
            fontWeight={600}
            mt="5px"
          >
            input box can be left and empty and submit can be made to make
            something empty
          </Text>
          <Button
            onClick={() => handleupdate("firstline")}
            m="15px"
            colorScheme={"blue"}
          >
            First sentence
          </Button>
          <Button
            onClick={() => handleupdate("option1")}
            m="15px"
            colorScheme={"blue"}
          >
            {" "}
            option 1{" "}
          </Button>
          <Button
            onClick={() => handleupdate("option2")}
            m="15px"
            colorScheme={"blue"}
          >
            option 2{" "}
          </Button>
          <Button
            onClick={() => handleupdate("option3")}
            m="15px"
            colorScheme={"blue"}
          >
            option 3{" "}
          </Button>
          <Button
            onClick={() => handleupdate("option4")}
            m="15px"
            colorScheme={"blue"}
          >
            option 4{" "}
          </Button>
          <Button
            onClick={() => handleupdate("option5")}
            m="15px"
            colorScheme={"blue"}
          >
            option 5{" "}
          </Button>
        </TabPanel>

        <TabPanel>
         
            
            
            <TableContainer>
              <Table variant="simple">
                
                <Thead>
                  <Tr>
                    <Th>username</Th>
                    <Th>email</Th>
                    <Th>phone number</Th>
                  </Tr>
                </Thead>
                <Tbody>
                 {
                    x?.map((elem)=>(
                        <Tr key={elem.email}>
                        <Td fontSize={"15px"} fontWeight={600}>{elem.name}</Td>
                        <Td fontSize={"15px"} fontWeight={600}>{elem.email}</Td>
                        <Td fontSize={"15px"} fontWeight={600}>{elem.number}</Td>
                      </Tr>
                    ),[])

                  
                 }
                </Tbody>
              </Table>
            </TableContainer>

           
         
        </TabPanel>
      </TabPanels>
    </Tabs>
    </>
  );
}
