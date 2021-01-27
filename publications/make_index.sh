for f in *; do
    if [ -d "$f" ]; then
        echo "$f"
        echo "<!DOCTYPE html>" > "$f/index.html"
        echo "<meta charset="utf-8">" >> "$f/index.html"
        echo "<title>Redirecting to https://jku-vds-lab.at/</title>" >> "$f/index.html"
        echo "<meta http-equiv=\"refresh\" content=\"0; URL=https://jku-vds-lab.at/publications/$f\">" >> "$f/index.html"
        echo "<link rel=\"canonical\" href=\"https://jku-vds-lab.at/publications/publications/$f\">" >> "$f/index.html"
        echo -------------------------------
    fi
done
