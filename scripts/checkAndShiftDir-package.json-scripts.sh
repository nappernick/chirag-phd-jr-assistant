#!/bin/bash


if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <target-directory-relative-to-project-root>"
    exit 1
fi

# Target directory from the arg
relative_target_dir=$1

# Find the root => assume root has a .git
project_root=$(git rev-parse --show-toplevel)

# Calculate the absolute target directory path
target_dir_path="$project_root/$relative_target_dir"

# Get the cwd
current_dir=$(pwd)

# Change to the target dir if not already there
if [ "$current_dir" != "$target_dir_path" ]; then
    cd "$target_dir_path" || exit
fi
