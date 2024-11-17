from PIL import Image, ImageDraw, ImageFont
import os

# Create profile image
profile_size = (400, 400)
profile_img = Image.new('RGB', profile_size, '#f3f4f6')
draw = ImageDraw.Draw(profile_img)

# Draw circle
circle_center = (200, 160)
circle_radius = 100
circle_bbox = (circle_center[0] - circle_radius,
               circle_center[1] - circle_radius,
               circle_center[0] + circle_radius,
               circle_center[1] + circle_radius)
draw.ellipse(circle_bbox, fill='#2563eb')

# Add text
draw.text((200, 320), 'Profile', fill='#1f2937', anchor='mm', font=None)

# Save profile image
profile_img.save('profile.jpg')

# Create project image
project_size = (800, 400)
project_img = Image.new('RGB', project_size, '#f3f4f6')
draw = ImageDraw.Draw(project_img)

# Draw project window
draw.rectangle((50, 50, 750, 300), fill='#2563eb')

# Draw window controls
for i, x in enumerate([80, 100, 120]):
    draw.ellipse((x-6, 74, x+6, 86), fill='white')

# Add text
draw.text((400, 350), 'GitHub Topics Updater', fill='#1f2937', anchor='mm', font=None)

# Save project image
project_img.save('project1.jpg')
