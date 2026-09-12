import math

def build_svg():
    cot = 0.81
    
    # Silver Z Coordinates
    # Top bar
    y_top = 90
    h_top = 58
    y_top_bot = y_top + h_top  # 148
    
    x_tr = 455  # top right acute tip
    x_tip = 180 # top left chevron tip
    x_tl = x_tip + h_top * cot # 180 + 46.98 = 226.98
    
    w_stem = 86 # stem thickness
    x_inner_top = x_tr - w_stem - (y_top_bot - y_top) * cot # 455 - 86 - 58 * 0.81 = 322.02
    
    # Bottom
    y_bot = 350
    h_bot = 52
    y_shelf = y_bot - h_bot # 298
    
    x_shelf_start = x_tr - (y_shelf - y_top) * cot # 455 - 208 * 0.81 = 286.52
    x_shelf_end = 412
    x_bot_right = 422
    
    # Green Piece
    gap = 14
    y_g_top = 228
    y_g_bot = y_shelf - gap # 284
    h_g = y_g_bot - y_g_top  # 56
    
    # Green left edge
    x_stem_at_g_top = x_tr - (y_g_top - y_top) * cot # 455 - 138 * 0.81 = 343.22
    x_g_tl = x_stem_at_g_top + gap # 357.22
    x_g_bl = x_g_tl - h_g * cot   # 357.22 - 56 * 0.81 = 311.86
    
    w_g = 88 # width of green piece
    x_g_tr = x_g_tl + w_g # 445.22
    x_g_br = x_g_bl + w_g # 399.86
    
    # SVG string
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="100 60 400 320" width="100%" height="100%" fill="none">
  <defs>
    <!-- Metallic gradient for Z body -->
    <linearGradient id="silverGrad" x1="20%" y1="10%" x2="80%" y2="90%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="15%" stop-color="#E8ECF1" />
      <stop offset="45%" stop-color="#C5CDD8" />
      <stop offset="70%" stop-color="#E2E7ED" />
      <stop offset="100%" stop-color="#A2ACB9" />
    </linearGradient>

    <!-- Bevel light highlight -->
    <linearGradient id="bevelLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#CBD3DE" stop-opacity="0.2" />
    </linearGradient>

    <!-- 3D Bevel edge for metallic look -->
    <linearGradient id="metalEdge" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7B8593" />
      <stop offset="50%" stop-color="#5B6471" />
      <stop offset="100%" stop-color="#404650" />
    </linearGradient>

    <!-- Green gradient for accent pill -->
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8CE81B" />
      <stop offset="35%" stop-color="#73D011" />
      <stop offset="75%" stop-color="#58B306" />
      <stop offset="100%" stop-color="#449402" />
    </linearGradient>

    <!-- Green surface gloss reflection -->
    <linearGradient id="greenGloss" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#B6FF59" stop-opacity="0.8" />
      <stop offset="40%" stop-color="#8CE81B" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#3A8200" stop-opacity="0.4" />
    </linearGradient>

    <!-- Drop shadow filter -->
    <filter id="dropShadow" x="-10%" y="-10%" width="130%" height="135%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.18" />
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.12" />
    </filter>

    <filter id="greenGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#3F8602" flood-opacity="0.35" />
    </filter>
  </defs>

  <g filter="url(#dropShadow)">
    <!-- 3D Extrusion base for Z -->
    <path d="
      M {x_tl+2} {y_top+3}
      L {x_tr+2} {y_top+3}
      L {x_shelf_start+2} {y_shelf+3}
      L {x_shelf_end+2} {y_shelf+3}
      A 12 12 0 0 1 {x_bot_right+2} {y_shelf+15+3}
      L {x_bot_right+2} {y_bot-12+3}
      A 12 12 0 0 1 {x_shelf_end+2} {y_bot+3}
      L 182 {y_bot+3}
      A 26 26 0 0 1 156 {y_bot-24+3}
      L {x_inner_top-w_stem+2} {y_top_bot+3}
      L {x_tip+2} {y_top_bot+3}
      Z
    " fill="#4B535E" opacity="0.4" />

    <!-- Main Silver Z Body -->
    <path d="
      M {x_tl} {y_top}
      L {x_tr} {y_top}
      L {x_shelf_start} {y_shelf}
      L {x_shelf_end} {y_shelf}
      A 10 10 0 0 1 {x_bot_right} {y_shelf+12}
      L {x_bot_right} {y_bot-10}
      A 10 10 0 0 1 {x_shelf_end} {y_bot}
      L 180 {y_bot}
      A 24 24 0 0 1 156 {y_bot-22}
      L {x_inner_top} {y_top_bot}
      L {x_tip} {y_top_bot}
      Z
    " fill="url(#silverGrad)" stroke="url(#bevelLight)" stroke-width="1.5" stroke-linejoin="round" />

    <!-- Green Accent Parallelogram -->
    <g filter="url(#greenGlow)">
      <!-- Base green pill with rounded corners -->
      <path d="
        M {x_g_tl+8} {y_g_top}
        L {x_g_tr-8} {y_g_top}
        A 9 9 0 0 1 {x_g_tr} {y_g_top+7}
        L {x_g_br+4} {y_g_bot-7}
        A 9 9 0 0 1 {x_g_br-4} {y_g_bot}
        L {x_g_bl+8} {y_g_bot}
        A 9 9 0 0 1 {x_g_bl} {y_g_bot-7}
        L {x_g_tl-4} {y_g_top+7}
        A 9 9 0 0 1 {x_g_tl+8} {y_g_top}
        Z
      " fill="url(#greenGrad)" stroke="#A6F745" stroke-width="1" stroke-opacity="0.6" />

      <!-- Green Gloss Highlight -->
      <path d="
        M {x_g_tl+10} {y_g_top+2}
        L {x_g_tr-10} {y_g_top+2}
        A 7 7 0 0 1 {x_g_tr-2} {y_g_top+8}
        L {x_g_br-20} {y_g_top+22}
        L {x_g_tl-2} {y_g_top+22}
        A 7 7 0 0 1 {x_g_tl+10} {y_g_top+2}
        Z
      " fill="url(#greenGloss)" />
    </g>
  </g>
</svg>"""
    with open("public/logo.svg", "w") as f:
        f.write(svg)
    print("Generated public/logo.svg successfully!")

build_svg()
