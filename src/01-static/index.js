const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack
import { ReactComponent as Logo } from "../bv-logo.svg";

// Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader
import logoWhiteURL from "../bv-logo-white.svg";

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType("bcdesigns/static", {
  title: __("Like & Subscribe", "bcdesigns"),
  icon: { src: Logo },
  category: "bcdesigns",

  // https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
  edit() {
    return (
      <div className="bcdesigns-block bcdesigns-static">
        <figure className="bcdesigns-logo">
          <img src={logoWhiteURL} alt="logo" />
        </figure>
        <div className="bcdesigns-info">
          <h3 className="bcdesigns-title">
            {__("The Binaryville Podcast", "bcdesigns")}
          </h3>
          <div className="bcdesigns-cta">
            <a href="#">{__("Like & Subscribe!", "bcdesigns")}</a>
          </div>
        </div>
      </div>
    );
  },
  save() {
    return (
      <div className="bcdesigns-block bcdesigns-static">
        <figure className="bcdesigns-logo">
          <img src={logoWhiteURL} alt="logo" />
        </figure>
        <div className="bcdesigns-info">
          <h3 className="bcdesigns-title">
            {__("The Binaryville Podcast", "bcdesigns")}
          </h3>
          <div className="bcdesigns-cta">
            <a href="/subscribe">{__("Like & Subscribe!", "bcdesigns")}</a>
          </div>
        </div>
      </div>
    );
  }
});
