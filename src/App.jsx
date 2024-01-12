import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

const App = () => {
  const [message, setMessage] = useState('');

  const commands = [
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
        setMessage(`Changing the background color to ${color}`)
      },
    },
    {
      command: 'I want to see a dog',
      callback: () => {
        window.location.href = 'https://www.youtube.com/shorts/dFg8Nu2X5Mo';
        setMessage('Navigating to YouTube');
      },
    },
    {
      command: 'write an email to :recipient with subject :subject and body :body',
      callback: (recipient, subject, body) => {
        setMessage(`Writing an email to ${recipient} with subject "${subject}" and body "${body}"`);
        // You can implement the logic to open an email composition form here
        // For simplicity, we are just logging the details in this example
        console.log(`Recipient: ${recipient}, Subject: ${subject}, Body: ${body}`);
      },
    },
    {
      command: "reset background colour",
      callback: () => {
        document.body.style.background = `#fff`;
        setMessage("Reset the background color")
      },
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  const handleSpeechRecognition = () => {
    SpeechRecognition.startListening();
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <>
      <Container
        p = "2em"
        maxW= "100%"
      >
        <Heading
          textAlign={"center"}
        >
          Voice to Text Chatbot
        </Heading>
        <Box
          p = "2em 1em"
          m = "0 auto"
          mt = "1em"
          w = "md"
          boxShadow= "2xl"
          borderRadius= "xl"
        >
          <Box>
            <Text>
              <strong>Transcript: </strong>
              <br />
              {transcript}
            </Text>
            <Text>
              <strong>Message:</strong>
              <br />
              {message}
            </Text>
          </Box>
          <Box>
            <Button
              // m = "0.5em auto"
              mt = "1em"
              ml = "1em"
              colorScheme='green'
              onClick={handleSpeechRecognition}
              w = "sm"
            >
              Start Listening
            </Button>
            <Button
              // m = "0.5em auto"
              mt = "1em"
              ml = "1em"
              colorScheme='red'
              onClick={handleStopListening}
              w = "sm"
            >
              Stop Listening
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default App;
