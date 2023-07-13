import {
  Container,
  Text,
  useColorModeValue,
  fontSize,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FiDownload } from 'react-icons/fi';
import resume from "../utils/Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
// import worker from 'pdfjs-dist/webpack';
// pdfjs.GlobalWorkerOptions.workerSrc = worker;

function Resume() {
  const handleDownload = () => {
    window.open(resume, "_blank");
  };
  return (
    <Container
      color={useColorModeValue("gray.500", "gray.400")}
      fontSize={"1xl"}
      fontWeight={"300"}
      
    
      
    >
      <Link
        color={useColorModeValue("blue.500", "blue.200")}
        onClick={handleDownload}
        download
        style={{ display: "flex", alignItems: "center" }}
      >
        <FiDownload size={20} style={{ marginRight: "5px" }} />
        <span>Download Resume</span>
      </Link>

      <Document
        file={resume}
        onLoadError={console.error}
        style={{ width: "100vw", height: "auto" }}
        overflowX="auto"
      maxW="100vw"
      h="100%"
      whiteSpace="nowrap"
      pb="17px"
      
      px="32px"
      sx={
         { 
        '::-webkit-scrollbar':{
               display:'none'
           }
        }
      }
      >
        <Page pageIndex={0} renderTextLayer={false} pageNumber={1} />
      </Document>
      <Link
        color={useColorModeValue("blue.500", "blue.200")}
        onClick={handleDownload}
        download
      >
        
      </Link>
    </Container>
  );
}

export default Resume;
