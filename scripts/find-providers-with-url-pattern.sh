#!/usr/bin/env bash

set -euo pipefail

root_dir="${1:-.}"

while IFS= read -r -d '' provider_file; do
  url_pattern=$(awk '
    /^[[:space:]]*urlPattern[[:space:]]*:[[:space:]]*\// {
      sub(/^[[:space:]]*urlPattern[[:space:]]*:[[:space:]]*/, "")
      sub(/,[[:space:]]*$/, "")
      print
      exit
    }
  ' "$provider_file")

  if [[ -n "$url_pattern" ]]; then
    printf '%s: %s\n' "$(basename "$provider_file")" "$url_pattern"
  fi
done < <(
  find "$root_dir" \
    -type d -name '.claude' -prune -o \
    -type f -name '*Provider.ts' -print0
)