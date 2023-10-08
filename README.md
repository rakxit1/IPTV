# IPTV React Native Project

![IPTV demo](/media/IPTV_demo.mp4)

This was one of my practice project which i made during my learning of react native

This React Native project is dedicated to building an engaging application that utilizes IPTV APIs to provide users with a seamless experience of exploring various TV channels and streaming content. Below, we'll walk through the key components and functionalities that constitute this project.

## Project Structure

The project comprises several key components, each serving a unique purpose in enhancing the user experience.

- **ChannelList.tsx**: This component forms the core of the application, displaying a comprehensive list of channels. It effectively fetches data from the IPTV APIs, implements infinite scrolling for smoother navigation, and facilitates seamless channel selection.

- **ErrorModal.tsx**: In the event of errors or important notifications, this modal component plays a pivotal role. It ensures that critical messages are presented to the user in a clear and unobtrusive manner.

- **Intro.tsx**: The introductory screen is designed to welcome users and guide them on how to get started with the IPTV application. It's the first point of interaction, offering an intuitive and friendly introduction.

- **MainScreen.tsx**: Defining the primary screen layout, this component is the cornerstone of the application. It amalgamates essential elements such as the header, search bar, and IPTV category tabs to create a seamless user interface.

- **VideoPlayer.tsx**: This crucial component takes care of video playback, error handling, and the display of a loading modal. It ensures that users can enjoy a smooth video streaming experience within the application.

- **All.tsx**: This component is responsible for presenting users with a curated selection of channels, comprehensive channel details, and video playback functionality.

## Usage

To run this project and experience its functionalities:

1. Clone this repository using `git clone https://github.com/rakxit1/IPTV.git`.

2. Install the necessary dependencies by running either `npm install` or `yarn install`.

3. Initiate the application using `npm start` or `yarn start`.

Make sure to set up the required environment for React Native development, including Node.js, npm or yarn, and a suitable emulator or device for testing.

## Libraries Utilized

This project leverages a range of powerful libraries to enhance its functionality and user experience:

- **React Native**: A robust framework for building mobile applications using JavaScript and React.

- **Redux**: A predictable state container for JavaScript applications, enabling efficient management of application state.

- **RecyclerListView**: An efficient way to display large lists in React Native, enhancing the performance of list-based components.

- **React Navigation**: A fundamental navigation library that facilitates seamless navigation in a React Native application.

- **Expo**: A toolkit for building native apps with ease, making the development process faster and more efficient.

- **Linear Gradient**: A versatile library used to create smooth and appealing gradients in React Native applications.

- **React Native Gesture Handler**: A powerful library for handling gestures and touch interactions in React Native applications.

- **Flash List**: A library that enhances the UI by presenting information in a visually pleasing and interactive flash list.

- **React Native Vector Icons**: A library that provides a wide range of customizable icons for React Native applications.

## Note

Ensure you have all the necessary prerequisites for React Native development in place, including Node.js, npm or yarn, and a compatible emulator or physical device for testing.
