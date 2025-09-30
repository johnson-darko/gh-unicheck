# GH-UniCheck

GH-UniCheck is a simple web application designed to help users check their eligibility for university programs in Ghana. This project provides a user-friendly interface where prospective students can find information about various programs, requirements, and application processes.

## Features

- Eligibility checker for various university programs in Ghana
- User-friendly interface
- Responsive design for mobile and desktop users
- Information on admission requirements and processes

## Project Structure

```
GH-UniCheck
├── src
│   ├── index.html        # Main HTML document for the landing page
│   ├── styles
│   │   └── main.css      # CSS styles for the landing page
│   ├── scripts
│   │   └── main.js       # JavaScript code for interactivity
│   └── assets            # Directory for images and media files
├── .github
│   └── workflows
│       └── deploy.yml    # GitHub Actions workflow for deployment
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/GH-UniCheck.git
   ```

2. Navigate to the project directory:
   ```
   cd GH-UniCheck
   ```

3. Install the necessary dependencies (if any):
   ```
   npm install
   ```

4. Open `src/index.html` in your web browser to view the landing page.

## Deployment

This project is set up to be deployed on GitHub Pages. The deployment process is automated using GitHub Actions. Once you push changes to the main branch, the workflow defined in `.github/workflows/deploy.yml` will handle the deployment.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.