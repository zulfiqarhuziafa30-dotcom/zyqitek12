import math

def generate_svg():
    # Dimensions
    # ViewBox: 0 0 600 450
    # Let center be (300, 225)
    
    # Cotangent of slant angle (~ 50 degrees)
    cot = 0.81
    
    # Y coordinates:
    y_top = 100
    h_top = 58
    y_top_bot = y_top + h_top  # 158
    
    y_bot = 350
    h_bot = 52
    y_shelf = y_bot - h_bot    # 298
    
    # Slanted stem:
    # Right edge of stem passes through top-right corner (x_tr, y_top)
    x_tr = 450
    # At y, x_stem_right(y) = x_tr - (y - y_top) * cot
    
    # Stem width horizontally:
    w_stem = 88
    # x_stem_left(y) = x_stem_right(y) - w_stem
    
    # Top bar:
    # Top edge goes from x_tl to x_tr
    # Top-left cut: slants from (x_tl, y_top) down-left to (x_tip, y_top_bot)
    # The cut has the same slant (cot):
    # x_tl = x_tip + (y_top_bot - y_top) * cot = x_tip + h_top * cot
    # Let x_tip = 180
    x_tip = 180
    x_tl = x_tip + h_top * cot  # 180 + 58 * 0.81 = 226.98
    
    # Under top bar, horizontal line goes from x_tip to x_stem_left(y_top_bot)
    x_stem_left_at_top_bot = x_tr - w_stem - (y_top_bot - y_top) * cot
    # 450 - 88 - 58 * 0.81 = 362 - 46.98 = 315.02
    
    # Bottom shelf:
    # At y_shelf, x_stem_right = x_tr - (y_shelf - y_top) * cot
    # 450 - (298 - 100) * 0.81 = 450 - 198 * 0.81 = 450 - 160.38 = 289.62
    x_shelf_start = x_tr - (y_shelf - y_top) * cot
    # Shelf extends to the right:
    x_shelf_end = 405
    
    # Bottom horizontal line:
    # from x_bl to x_br
    x_br = x_shelf_end + 8
    
    # Left edge of stem goes down to bottom-left curve:
    # At y_bot - 30, x_stem_left is:
    # x_stem_left(y) = x_tr - w_stem - (y - y_top) * cot
    
    print(f"Top bar: ({x_tl:.1f}, {y_top}) to ({x_tr}, {y_top})")
    print(f"Top-left cut: to tip ({x_tip}, {y_top_bot})")
    print(f"Inner top line: to ({x_stem_left_at_top_bot:.1f}, {y_top_bot})")
    print(f"Shelf start: ({x_shelf_start:.1f}, {y_shelf}) to ({x_shelf_end}, {y_shelf})")

generate_svg()
