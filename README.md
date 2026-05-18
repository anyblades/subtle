# 🥷 Build Awesome Starter <sup class="sup">![](https://img.shields.io/github/v/release/anyblades/build-awesome-starter?label=&color=black)</sup>

Modern, lightweight Eleventy v4 starter with Tailwind/Pico, [*Bl*ades](https://github.com/anyblades/blades), CMS and multisiting 🥷

[![](https://img.shields.io/badge/Demo-darkslategray?style=for-the-badge)](https://build.blades.ninja/)
[![](https://img.shields.io/netlify/93494d69-cb21-4ad0-855f-3748d3741e5c?logo=netlify&label=Deploy&labelColor=darkslategray&style=for-the-badge)](https://app.netlify.com/start/deploy?repository=https://github.com/anyblades/build-awesome-starter)
[![](https://img.shields.io/badge/Code-gainsboro?logo=github&logoColor=darkslategray&style=for-the-badge)](https://github.com/anyblades/build-awesome-starter)
[![](https://img.shields.io/github/stars/anyblades/build-awesome-starter?label=Star&labelColor=gainsboro&color=silver&style=for-the-badge)](https://github.com/anyblades/build-awesome-starter)

#### Killer features

1. **Eleventy v4 by default**  
   <sup>both v4 (Build Awesome) & v3 supported</sup>
2. **"Thin client" architecture**  
   <sup>thanks [Blades[-plugin]](https://github.com/anyblades/eleventy-blades) for reusability</sup>
3. **Tailwind v4 included**  
   <sup>with Typography plugin & [Blades[-kit]](https://github.com/anyblades/blades)</sup>
4. **Sveltia CMS included**  
   <sup>modern Decap/Netlify CMS successor</sup>
5. **Multisite support**  
   <sup>thanks to symlink-based setup</sup>
6. **One-click start**  
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/anyblades/build-awesome-starter)

<!--{.columns}-->

---

#### How it works?

**Build Awesome Starter** is an advanced version of 🥷 [*Blade*switch](https://github.com/anyblades/bladeswitch) starter:

- _BUT_ focusing exclusively on Eleventy v4 and adding Tailwind v4 support.
- It reuses same [Blades[-plugin]](https://github.com/anyblades/eleventy-blades) to symlink `eleventy.config.js` by default (so you don't have to maintain it anymore!)
- It also reuses Nunjucks version of the same _universal_ [Blades[-kit]](https://github.com/anyblades/blades):
  - _universal_ means you can switch `.njk` to `.liquid` any time
  - _universal_ also means you can switch from Tailwind to Pico.css or even bare-metal Blades[.css]

---

#### Local development

As simple as:

```sh
npm install    # dependencies
npm start      # development
npm run stage  # serve production version locally
               # ready to deploy! 🚀
```

CMS will be available locally at `http://localhost:8080/admin/` (or similar port).

---

#### Showcase

https://any.digital/ &nbsp;&nbsp;
[<i>🥷&nbsp;</i>blades.ninja](https://blades.ninja/) &nbsp;&nbsp;
https://minform.hostfurl.com/ &nbsp;&nbsp;
[<i class="fa-solid fa-plus text-gray-300 hover:text-black"></i>](https://github.com/anyblades/build-awesome-starter/edit/main/src/index.md)<!--{title="Suggest your website started by Build Awesome Starter"}-->

---

#### More info

<big>Repository: https://github.com/anyblades/build-awesome-starter</big>

Found it useful? Give a [![](https://img.shields.io/github/stars/anyblades/build-awesome-starter?label=Star&)](https://github.com/anyblades/build-awesome-starter)

Featured by:

- https://11tybundle.dev/starters/ and [blog](https://11tybundle.dev/blog/11ty-bundle-83/)
- https://www.11ty.dev/docs/starter/
- https://sveltiacms.app/en/docs/start for [11ty](https://sveltiacms.app/en/docs/frameworks/eleventy)
- https://blades.ninja/11ty/#min-starters
- https://bladeswitch.com starter
- https://github.com/johnheenan/minform starter
- https://github.com/hostfurl/minformhf starter
- 🕶️ [awesome-eleventy](https://github.com/anydigital/awesome-11ty-build-awesome)

Support:

- https://github.com/orgs/anyblades/discussions for questions and ideas
- https://github.com/anyblades/build-awesome-starter/issues for change requests or bug reports
- https://www.11ty.dev/blog/discord/ for 11ty community support
- https://sveltiacms.app/en/support for Sveltia CMS community support

License: [MIT](https://github.com/anyblades/build-awesome-starter/blob/main/LICENSE)
