# Astro Marketing Website Boilerplate - Webflow DevLink Ready

This is a boilerplate template for marketing websites built with Astro that can be seamlessly connected to Webflow via DevLink. The styling is kept minimal and is primarily controlled by the Webflow project, allowing for easy design management and updates.

## About This Template

This template is based on the [Astro Tutorial](https://docs.astro.build/en/tutorial/0-introduction/) and provides a solid foundation for marketing websites. It includes:

- **Minimal Styling**: Clean, minimal CSS that won't interfere with Webflow's design system
- **DevLink Ready**: Structured to work seamlessly with Webflow's DevLink feature
- **Content Collections**: Built with Astro's content collections for easy content management
- **SEO Optimized**: Includes RSS feeds, meta tags, and proper page structure
- **Responsive Design**: Mobile-first approach that works well with Webflow's responsive tools

## Features

- Blog functionality with content collections
- Tag-based content organization
- RSS feed generation
- Dark/light theme support
- Mobile-responsive navigation
- SEO-optimized structure

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a new site in Webflow (use the HNDRX Starter Cloneable)
4. `cd my-devlink-app`
5. Connect to your Webflow project [via DevLink](https://developers.webflow.com/devlink/docs/quick-start/quick-start-component-export) (start from 2)

   1. Install the Webflow CLI: `npm install -D @webflow/webflow-cli`
   2. Authenticate with Webflow: `webflow auth login`

6. Make sure the DevLink settings in `webflow.json` are correct with the following configuration:

   ```js
   {
    "devlink":{
    "host": "https://api.webflow.com",
    "rootDir": "./devlink",
    "cssModules": true,
    "relativeHrefRoot": "/"
    }
   }
   ```

7. Prepare your Webflow components
   In your Webflow project, prepare any components you want to export to your React project by:

   - Selecting an element or group of elements
   - Right-clicking and selecting “Create Component”
   - Naming your component (use clear, descriptive names)

8. Export and use your components
   1. Export your components: `webflow devlink sync`
      This will create a devlink directory in your project containing:
      - React components for each of your Webflow components
      - CSS modules for component-specific styling
      - A global CSS file for shared styles
      - A DevLinkProvider component for handling interactions
9. We added the `DevLinkProvider` element for you in the BaseLayout.astro so you can use Webflow's native interactions. Now use your components!
   Example:

   ```js
   <Navbar client:load>
     <AstroButton variant="Primary" text="Test" link={{ href: "https://www.google.com" }} slot="buttonsSlot" />
     <AstroButton variant="Secondary" text="Test" link={{ href: "https://www.google.com" }} slot="buttonsSlot" />
   </Navbar>
   ```

10. Start the development server: `npm run dev` 🙌

## Webflow DevLink Integration

This template is specifically designed to work with Webflow's DevLink feature, allowing you to:

- Design your website visually in Webflow
- Export the design to this Astro project
- Maintain the connection for easy updates and iterations

The minimal styling approach ensures that Webflow's exported styles take precedence, giving you full control over the visual design while maintaining the performance benefits of Astro.

## Components Architecture

Principles for designing components in Webflow to ensure clean export, [read the documentation here](https://developers.webflow.com/devlink/docs/component-export/design-guidelines/component-architecture).

### Supported and non-supported Webflow elements

The following Webflow elements are supported for export through DevLink:

- Layout
  - Container
  - Div Block
  - Section
  - Grid
  - Columns
  - List / List Item
  - Map
  - Navbar
  - Slider
  - Tabs
- Interactive
  - Button
  - Link Block
  - Form elements
  - Dropdown
  - Search
- Media and Content
  - Image
  - Video
  - Icon
  - Background Video
  - Code Embed
  - Heading
  - Paragraph
  - Text Link
  - Rich Text
  - Block Quote
  - Social embeds (Facebook, X/Twitter, YouTube)

⚠️ Ecommerce and CMS-specific elements are not supported
⚠️ Component slots aren’t supported in Exported Components. Please [see documentation](https://developers.webflow.com/devlink/docs/component-export/design-guidelines/props-slots) on how to use DevLink Slots instead.
