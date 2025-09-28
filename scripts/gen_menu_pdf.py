from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.units import inch
import os
src=os.path.expanduser("~/yummytimedeli/docs/menus/YummyTimeDeliMenu.md")
dst=os.path.expanduser("~/yummytimedeli/docs/menus/YummyTimeDeliMenu.pdf")
styles=getSampleStyleSheet()
title=ParagraphStyle('title', parent=styles['Heading1'], alignment=TA_CENTER, fontSize=18, spaceAfter=12)
h2=ParagraphStyle('h2', parent=styles['Heading2'], spaceBefore=8, spaceAfter=6)
body=ParagraphStyle('body', parent=styles['Normal'], leading=14, spaceAfter=4)
flows=[]
for line in open(src, encoding='utf-8'):
    s=line.rstrip('\n')
    if not s: flows.append(Spacer(1,6)); continue
    if s.startswith('# '): flows.append(Paragraph(s[2:].strip(), title))
    elif s.startswith('## '): flows.append(Paragraph(s[3:].strip(), h2))
    elif s.startswith('### '): flows.append(Paragraph(f"<b>{s[4:].strip()}</b>", body))
    elif s.startswith('- '): flows.append(Paragraph("• "+s[2:].strip(), body))
    else: flows.append(Paragraph(s, body))
SimpleDocTemplate(dst, pagesize=letter,
    leftMargin=0.7*inch, rightMargin=0.7*inch, topMargin=0.7*inch, bottomMargin=0.7*inch).build(flows)
print("PDF written:", dst)
