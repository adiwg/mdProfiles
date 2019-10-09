---
title: Core Profile Definitions
layout: default
---

# [![mdEditor](https://www.mdeditor.org/img/mdEditor_logo.png){: style="max-height: 1.3em;"}](https://www.mdeditor.org){: .d-inline-block .align-bottom} {{ page.title }} {% if site.github.latest_release %}<a href="{{site.github.latest_release.html_url}}" style="font-size:.5em;" class="text-muted">{{site.github.latest_release.tag_name}}</a>{% endif %}

{: .text-info}

{% assign schema = site.data["profile-schema"] %}
{% assign file = site.static_files| where:"basename","profile-schema" | first %}
{% assign map = site.static_files| where:"basename","full-map" | first %}

<div class="row">
  <div class="col-sm">
    <div class="card mb-5 mt-5 border-info">
      <h4 class="card-header text-white bg-info">Schema</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
        <h5 class="list-group-item-header">{{schema.title}}</h5>
        <div><a href="{{ file.path | relative_url }}">{{ site.url }}{{ file.path | relative_url }}</a></div>
        <div>{{schema.description}}</div>
        <!-- <div>Version: <span class="text-success">{{site.github.latest_release}}</span></div> -->
        </li>
      </ul>
    </div>
  </div>
  <div class="col-sm">
    <div class="card mb-5 mt-5 border-info">
      <h4 class="card-header text-white bg-info">Map</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
        <h5 class="list-group-item-header">Full Component Map</h5>
        <div><a href="{{ map.path | relative_url }}">{{ site.url }}{{ map.path | relative_url }}</a></div>
        <div>Map of all component options</div>
        <!-- <div>Version: <span class="text-success">{{site.github.latest_release}}</span></div> -->
        </li>
      </ul>
    </div>
  </div>
</div>

{% assign folders = site.static_files | where_exp:"item", "item.path contains 'json/profiles'" | group_by_exp: "item",
"item.path | remove: '/json/' | remove: item.name" %}

{% for folder in folders %}
{% assign name = folder.name | append: "^" | remove :"/^" %}

<div class="card mt-3 mb-5">
  <h4 class="card-header text-info">{{name | capitalize}}</h4>
  <ul class="list-group list-group-flush">
  {% for file in folder.items %}
    {% assign path = name | split:"/" %}
    {% assign data = site.data %}

    {% for itm in path %}
      {% assign data = data[itm] %}
    {% endfor %}

    <li class="list-group-item">
    <h5 class="list-group-item-header">{{data[file.basename].title}}</h5>
    <div><a href="{{ file.path | relative_url }}">{{ site.url }}{{ file.path | relative_url }}</a></div>
    <div>{{data[file.basename].description}}</div>
    <!-- <div>Version: <span class="text-success">{{site.github.latest_release}}</span></div> -->
    </li>

{% endfor %}

  </ul>
</div>
{% endfor %}
