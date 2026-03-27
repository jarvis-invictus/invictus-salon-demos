# PILOT REBUILD BRIEF — Salon Demo V1

## STATUS: READY TO BUILD (Claude Code + Opus)

**Timing:** Mar 27, 23:15 IST
**Estimated Duration:** 2-3 hours
**Target Completion:** ~02:00-03:00 IST

---

## WHAT TO BUILD

### Site: Salon Demo V1
**Current State:** Pink color theme, no images, generic structure
**Target State:** Professional salon site with real images, personality, animations

---

## SPECS

### 1. HERO SECTION
```
- Hero image: Salon interior (Unsplash)
  URL: https://images.unsplash.com/photo-1522337360788-8b13019b94ff?w=1200
- Headline: "[Salon Name], [Location]"
- Subheadline: "[Years in business] of excellence in [service type]"
- CTA Button: "Book Appointment"
```

### 2. SERVICES SECTION
**5 Service Cards with Scroll-Reveal Animation:**
- Haircut + Styling
  Image: Salon styling detail shot
  Animation: Fade-in + scale (0.9→1.0) on scroll
  
- Color Treatment
  Image: Hair coloring process
  Animation: Fade-in + slide-up on scroll
  
- Hair Treatment
  Image: Salon treatment service
  Animation: Fade-in + scale on scroll
  
- Bridal Services
  Image: Bride preparation
  Animation: Fade-in + slide-up on scroll
  
- Extensions
  Image: Hair extensions detail
  Animation: Fade-in + scale on scroll

**Animation:** GSAP ScrollTrigger (stagger: 0.1s)
**Images:** From image-sourcing-guide.md (curated Unsplash URLs)

### 3. STYLIST TEAM SECTION
**3-4 Individual Stylist Cards:**
Each with:
- Profile photo (real professional portrait from Unsplash)
- Name + Specialization
- Years of experience
- Unique biography (not copy-paste)
- Link to book with this stylist

**Animation:** Hover effect (scale + shadow lift)
**Images:** Diverse professional portraits

### 4. BEFORE/AFTER TRANSFORMATION CAROUSEL
**Interactive Carousel:**
- 4-5 transformation images cycling automatically
- Manual next/prev buttons
- 5-second per image (auto-play)
- Smooth fade transition (GSAP)
- Shows previous → after side-by-side or stacked

**Animation:** GSAP fade + opacity transitions
**Images:** Real before/after salon transformations

### 5. TESTIMONIALS SECTION
**3-4 Client Testimonial Cards:**
Each with:
- Client name
- Client location (city, neighborhood)
- 5-star rating
- Testimonial text (real, specific to service)
- Small client photo/avatar
- Date of visit

**Animation:** Testimonials fade in on scroll (stagger)
**Images:** Small profile photos for each testimonial

### 6. BOOKING SECTION
- Sticky "Book Now" button (always visible)
- Booking CTA above footer
- Form fields: Name, Phone, Service, Preferred Date/Time, Notes

### 7. MOBILE OPTIMIZATION
- All images responsive (max-width: 100%)
- Touch-friendly buttons (min 44px height)
- Hamburger menu on mobile
- Lazy loading on images
- Optimized animation performance on mobile

---

## IMAGE CHECKLIST

```
✓ Hero image (salon interior)
✓ Service card 1 image (haircut/styling)
✓ Service card 2 image (coloring)
✓ Service card 3 image (treatment)
✓ Service card 4 image (bridal)
✓ Service card 5 image (extensions)
✓ Stylist 1 portrait
✓ Stylist 2 portrait
✓ Stylist 3 portrait
✓ Before/After image 1
✓ Before/After image 2
✓ Before/After image 3
✓ Before/After image 4
✓ Testimonial avatar 1
✓ Testimonial avatar 2
✓ Testimonial avatar 3
```

**Total: ~20 images** (all curated from image-sourcing-guide.md)

---

## ANIMATION CHECKLIST

```
✓ Scroll-trigger service card reveals (GSAP)
✓ Service card hover effects (scale + shadow)
✓ Before/After carousel fade transition (GSAP)
✓ Testimonial stagger fade-in (GSAP)
✓ Stylist card hover (scale + brighten)
✓ Sticky button fade-in on scroll
✓ Parallax on hero image (subtle)
✓ CTA button micro-interaction (on hover)
```

**All from:** assets/animations-gsap-templates.js (ready to integrate)

---

## DEPLOYMENT

**Stack:** Next.js (like other sites)
**Framework:** React + Tailwind CSS
**Images:** Next.js `<Image>` component for optimization
**Animations:** GSAP + ScrollTrigger
**Responsive:** Mobile-first, 100% responsive
**Performance Target:** 
- Lighthouse: 85+ (Performance)
- Core Web Vitals: Green
- Bundle size: <200KB (JS + CSS)
- Images: WebP format where supported

---

## QUALITY GATES

Before deploy:
1. ✓ Mobile responsive tested (iPhone 12, iPad, Desktop)
2. ✓ Animations 60fps on all devices (use DevTools Performance tab)
3. ✓ All images load correctly (no broken images)
4. ✓ Form submission tested
5. ✓ Lighthouse score ≥ 85 (Performance)
6. ✓ No console errors

---

## POST-BUILD

**1. Deploy to Vercel**
(Once quota issue resolved)

**2. Zoro Audit**
Use new Humanization Index:
- Layer 5: Image Authenticity (0-100)
- Layer 6: Animation Quality (0-100)
- Layer 7: Visual Authenticity Index (0-100)
- **Target:** ≥ 80 composite score

**3. If Score ≥ 80:**
- Apply pattern to Salon v2, v3, v4, v5
- Move to Jewelry niche
- Scale to other niches

**4. If Score < 80:**
- Debug specific layer (images? animations? layout?)
- Iterate with Claude Code
- Re-audit

---

## RESOURCES READY

✅ **Image URLs:** image-sourcing-guide.md (all 20+ images curated + linked)
✅ **Animation Code:** assets/animations-gsap-templates.js (all 10 templates ready to use)
✅ **Research Docs:** humanization-research-phase-complete.md (design patterns documented)
✅ **Humanization Audit Framework:** New scoring layers defined

---

## GO!

Ready to start Claude Code rebuild. This will be the pilot for scaling humanization v2 across all 48 sites.

**Estimated timeline:** 2-3 hours total (research → build → test → deploy)
