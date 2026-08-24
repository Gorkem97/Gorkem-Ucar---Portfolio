#!/bin/bash
git show "5ff5188^:public/greenkids/Ekran Kaydı 2026-08-23 22.02.05-Apple Devices HD (Most Compatible).m4v" > public/videos/greenmate-session1.mp4
git show "5ff5188^:public/greenkids/Ekran Kaydı 2026-08-23 22.04.15-Apple Devices HD (Most Compatible).m4v" > public/videos/greenmate-session2.mp4
git show "5ff5188^:public/Jam titles/Ekran Kaydı 2026-08-23 22.24.31-Apple Devices HD (Most Compatible).m4v" > public/videos/jam-session1.mp4
git show "5ff5188^:public/Jam titles/jam-session2.mp4" > public/videos/jam-session2.mp4
git show "5ff5188^:public/Jam titles/trapped.mp4" > public/videos/jam-trapped.mp4
chmod +x fix_videos.sh
./fix_videos.sh
rm fix_videos.sh
