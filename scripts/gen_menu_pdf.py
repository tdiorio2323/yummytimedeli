from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib import colors
from reportlab.lib.units import inch
import os
import json

# File paths
output_path = "/Users/tylerdiorio/yummytimedeli/public/menus/YummyTimeDeliMenu.pdf"
logo_path = "/Users/tylerdiorio/yummytimedeli/public/assets/images/yummy-time-deli-logo.png"
menu_path = "/Users/tylerdiorio/yummytimedeli/docs/menus/menu.json"

# Create document
doc = SimpleDocTemplate(output_path, pagesize=letter)
elements = []

# Styles
styles = getSampleStyleSheet()
section_style = ParagraphStyle(
    "section_style",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=16,
    alignment=TA_LEFT,
    textColor=colors.HexColor("#8B4513"),  # SaddleBrown
    spaceAfter=10,
)
item_style = ParagraphStyle(
    "item_style",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=12,
    textColor=colors.black,
    alignment=TA_LEFT,
    spaceAfter=4,
)
title_style = ParagraphStyle(
    "title_style",
    parent=styles["h1"],
    fontName="Helvetica-Bold",
    fontSize=24,
    alignment=TA_CENTER,
    textColor=colors.HexColor("#8B4513"),  # SaddleBrown
    spaceAfter=20,
)

# Add logo at top center


elements.append(Paragraph("Yummy Time Deli", title_style))

# Load menu from JSON
with open(menu_path, 'r') as f:
    menu = json.load(f)

# Add sections properly with items
for section, items in menu.items():
    elements.append(Paragraph(section, section_style))
    for item in items:
        elements.append(Paragraph(item, item_style))
    elements.append(Spacer(1, 12))

# Build PDF
try:
    doc.build(elements)
    print(f"PDF successfully generated at: {output_path}")
except Exception as e:
    print(f"Error generating PDF: {e}")