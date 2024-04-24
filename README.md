**Note: This template is currently in beta and may undergo significant changes. Use it at your own risk.**

1. **Clone or Download Repository:**

   - Clone or download the repository containing the modular academic portfolio template from [GitHub](https://github.com/vaishnav-mk/academic-portfolio).

   ```bash
    git clone https://github.com/vaishnav-mk/academic-portfolio
    cd academic-portfolio
    npm install --legacy-peer-deps
    npm run dev
   ```

2. **Update Data:**

   - Update the [`data.json`](https://github.com/vaishnav-mk/academic-portfolio/blob/master/src/data/data.json) file located in the `data` directory with your academic information. Modify the content within the `"info"` section to reflect your personal details, such as name, location, university, about section, social media links, footer text, and navbar links.
   - Update the sections under `"sections"` with your experience, projects, and community details. Ensure you update the title, data, and other relevant fields such as title, location, duration, description, links, image, and tags.

3. **Add Images:**

   - Upload your images to the [`lib/images`](https://github.com/vaishnav-mk/academic-portfolio/tree/master/src/lib/images) folder. Make sure the image filenames match the ones specified in the `data.json` file for each section.

4. **Customize Styles (Optional):**

   - Customize the styles of the portfolio template according to your preferences by modifying the CSS or Svelte component files.

5. **Run Locally:**

   - Run the portfolio template locally to preview your changes and ensure everything looks as expected. You can do this by installing the necessary dependencies and starting the development server.

   ```bash
    npm run dev
   ```

   Go to `http://localhost:5173` to view the portfolio template in your browser.

6. **Deploy:**
   - Once you're satisfied with your portfolio, deploy it to a hosting service of your choice to make it accessible online. You can use platforms like Vercel, Netlify, or GitHub Pages for hosting.
