
# @rneui/template

## React Native Elements Expo Template

### Usage

#### Stable

        expo init app --template @rneui/template

#### Stable Typescript

        expo init app --template @rneui/template@ts

#### Bleeding Edge (Experimental)

        expo init app --template @rneui/template@edge

#### Bleeding Edge Typescript (Experimental)

        expo init app --template @rneui/template@edge-ts
=======
# Coffe_gate
Coffee Gate is a mobile app for a tea salon offering a virtual menu, QR code-based ordering, table reservations, and a loyalty program. It streamlines customer orders, automates table management, and provides an admin dashboard for managing orders, staff, and analytics.

## Features

- **Virtual Menu**: Customers can browse the menu with detailed descriptions and images of items, and place orders directly from their phones.
- **QR Code-Based Ordering**: Each table has a unique QR code. Customers scan the QR code to place an order. After placing an order, the system generates a QR code for that specific order.
- **Order Payment & Table Management**: When the admin or server scans the QR code for an order, it automatically marks the order as paid and frees the table for the next customers.
- **Add to Existing Orders**: Customers can add more items to their existing order but cannot modify the initial order.
- **Table Reservations**: Customers can reserve tables for events like sports matches, birthdays, or special occasions.
- **Loyalty Program**: Customers earn points for each purchase, which can be redeemed for rewards like discounts, free items, or special promotions.
- **Multi-Profile System**:
  - **Client**: Customers can place orders, submit complaints, track loyalty points, and view their order history.
  - **Server**: Servers can monitor table statuses (occupied or free), receive notifications for new or added orders, and mark orders as paid.
  - **Admin**: Administrators have access to a dashboard to manage orders, monitor tables, view server performance, and oversee business analytics.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **Expo CLI** for React Native development
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/coffee-gate.git

2. Navigate to the project directory:
   ```bash
   cd coffee-gate

4. Install dependencies:
   ```bash
   npm install

5. Start the application:
   ```bash
   expo start

   Use the Expo app on your phone or an emulator to view the app by scanning the provided QR code.

## Project Structure

**.**  
├── **assets/** _____________# Images, icons, fonts  
├── **components/** _________# Reusable UI components  
├── **screens/** ____________# App screens (Menu, Order, Reservation, etc.)  
├── **navigation/** _________# Navigation configurations  
├── **services/** __________# API services and backend interaction logic  
├── **utils/** ______________# Utility functions (QR code generation, date formatting, etc.)  
├── **App.js** ______________# Main entry point of the app  
├── **package.json** ________# Project configuration and dependencies  
└── **README.md** ___________# Project documentation  

## Technologies Used

- **React Native**: For building cross-platform mobile apps.
- **Expo: To ease** development and testing of the app.
- **Node.js / Express or Django**: Backend technologies to manage server-side logic, orders, and database interactions.
- **QRCode Generator**: For dynamically creating and scanning QR codes for tables and orders.
- **React Navigation**: To manage in-app navigation between screens.
- **Redux**: For managing global state across the application.

## Use Cases
### Ordering:

- Customers scan the table's QR code to view the menu and place an order.
- Once the order is placed, a unique QR code for the order is generated.
- The admin or server scans the order's QR code to mark it as paid and free the table.

### Table Reservations:

- Customers can reserve tables for specific events like matches or birthdays.
- The admin can approve or manage reservations through the dashboard.

### Loyalty Program:

- Customers earn points with each order, which can be redeemed for rewards.

### Admin Dashboard:

- The admin has access to a dashboard that provides an overview of orders, server performance, and table availability.
- Admins can also view statistics related to revenue, customer activity, and reservation management.

## Contributing

We welcome contributions to Coffee Gate! To contribute:

1. Fork the repository.

2. Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
3. Commit your changes
   ```bash
   git commit -m 'Add a new feature'
4. Push to the branch
   ```bash
   git push origin feature/your-feature-name
5. Create a pull request.

Please make sure to follow our contributing guidelines.

## Issues

If you encounter any bugs, feel free to open an issue in the GitHub repository. Please provide detailed information to help us resolve the issue faster.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For more information, feel free to reach out to the project maintainer:

- Name: Mohamed Nassim Hdhiri
- Email: hdhirimednassim@gmail.com
- LinkedIn: Nassim Hdhiri

## Common Issues and Fixes

### Issue 1: Error: Cannot find module '@react-native/assets-registry/registry.js'

- Error Message:
    ```bash 
    Error: Cannot find module '@react-native/assets-registry/registry.js'

- Solution:

Run the following command to install the missing module:
    ```bash
    npm install @react-native/assets-registry

### Issue 2: Error: Cannot find module 'metro/src/DeltaBundler/Graph'

- Error Message:
    ```bash
    Error: Cannot find module 'metro/src/DeltaBundler/Graph'

- Solution:

Run the following command to install the missing metro module:  
   ```bash
   npm install --save-dev metro
   ```

After applying these fixes, try starting the Expo server again:  
   ```bash
   npx expo start
   ```

### Issue 3: Issue: Babel Plugin Error with Expo
- Error Message:
```bash
Android Bundling failed 2239ms D:\test project\coffe_gate\node_modules\expo\AppEntry.js (1 module)

error: node_modules\expo\AppEntry.js: [BABEL] D:\test project\coffe_gate\node_modules\expo\AppEntry.js: .plugins is not a valid Plugin property       
› Detected a change in babel.config.js. Restart the server to see the new results. You may need to clear the bundler cache with the --clear flag for your changes to take effect.
```

- Solution:

1. Check the installed version of NativeWind:
```bash
npm list nativewind
```

2. Update NativeWind to the latest version:
```bash
npm install nativewind@latest
```

This should resolve the Babel plugin error related to NativeWind in your React Native project.


### Issue 4: Resolving TypeScript Error with NativeWind

If you encounter the following TypeScript error when using NativeWind in your React Native project:
```bash
Type '{ children: Element[]; className: string; }' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<View> & Readonly<ViewProps>'. Property 'className' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<View> & Readonly<ViewProps>'.
```

- Solution
1. Create a Declaration File:

In your project root, create a new file named **my-app.d.ts**.

2. Add Type Reference:

Open the my-app.d.ts file and add the following line:
```bash
/// <reference types="nativewind/types" />
```

3. Restart Your TypeScript Server:

If you're using an IDE like VSCode, you may need to restart the TypeScript server for the changes to take effect.

