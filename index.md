---
title: Core Profile Definitions
layout: default
---

# [![mdEditor](https://www.mdeditor.org/img/mdEditor_logo.png){: .img-fluid}](https://www.mdeditor.org){: .w-25 .d-inline-block} {{ page.title }}

{: .text-success}

{% assign files = site.static_files | where_exp:"item", "item.path contains 'resources/profiles'" | group_by_exp: "item",
"item.path | remove_first: '/resources/' | split: '/' | first" %}

{% for folder in files %}

<div class="card mt-3 mb-5">
  <h4 class="card-header">{{ folder.name | capitalize }}</h4>
  <ul class="list-group list-group-flush">
  {% for file in folder.items %}
    <li class="list-group-item">
    <h5 class="list-group-item-header">{{site.data[file.basename].title}}</h5>
    <div><a href="{{ file.path | relative_url }}">{{ site.url }}{{ file.path | relative_url }}</a></div>
    <div>{{site.data[file.basename].description}}</div>
    <div>Version: <span class="text-success">{{site.github.latest_release}}</span></div>
    </li>
  {% endfor %}
  </ul>
</div>
{% endfor %}

{% assign schema = site.data["profile-schema"] %}
{% assign file = site.static_files| where:"basename","profile-schema" | first %}

<div class="card mb-3 border-success">
  <h4 class="card-header text-white bg-success">Schema</h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <h5 class="list-group-item-header">{{schema.title}}</h5>
    <div><a href="{{ file.path | relative_url }}">{{ site.url }}{{ file.path | relative_url }}</a></div>
    <div>{{schema.description}}</div>
    <div>Version: <span class="text-success">{{site.github.latest_release}}</span></div>
    </li>
  </ul>
</div>
