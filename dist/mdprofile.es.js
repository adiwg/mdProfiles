var full = {
  identifier: 'full',
  namespace: 'org.adiwg.profile',
  alternateId: ['full'],
  title: 'Full',
  description: 'Every supported component',
  version: '0.1.21',
  components: {
    record: {},
    contact: {},
    dictionary: {}
  },
  nav: {
    record: [
      {
        title: 'Main',
        target: 'record.show.edit.main',
        tip: 'Basic information about the resource.'
      },
      {
        title: 'Metadata',
        target: 'record.show.edit.metadata',
        tip: 'Information about the metadata for the resource.'
      },
      {
        title: 'Keywords',
        target: 'record.show.edit.keywords',
        tip: 'Terms used to describe the resource.'
      },
      {
        title: 'Extent',
        target: 'record.show.edit.extent',
        tip: 'Information describing the bounds of the resource.'
      },
      {
        title: 'Spatial',
        target: 'record.show.edit.spatial',
        tip: 'Information concerning the spatial attributes of the resource.'
      },
      {
        title: 'Lineage',
        target: 'record.show.edit.lineage',
        tip: 'Information on the history of the resource.'
      },
      {
        title: 'Taxonomy',
        target: 'record.show.edit.taxonomy',
        tip: 'Information on the taxa associated with the resource.'
      },
      {
        title: 'Distribution',
        target: 'record.show.edit.distribution',
        tip: 'Information about obtaining the resource.'
      },
      {
        title: 'Constraints',
        target: 'record.show.edit.constraint',
        tip: 'Information about constraints applied to the resource.'
      },
      {
        title: 'Associated',
        target: 'record.show.edit.associated',
        tip: 'Other resources with a defined relationship to the resource.'
      },
      {
        title: 'Documents',
        target: 'record.show.edit.documents',
        tip: 'Other documents related to, but not defining, the resource.'
      },
      {
        title: 'Funding',
        target: 'record.show.edit.funding',
        tip:
          'Information about funding allocated to development of the resource.'
      },
      {
        title: 'Dictionaries',
        target: 'record.show.edit.dictionary',
        tip: 'Data dictionaries associated with the resource.'
      }
    ],
    dictionary: [
      {
        title: 'Main',
        target: 'dictionary.show.edit.index',
        tip: 'Basic information about the dictionary.'
      },
      {
        title: 'Citation',
        target: 'dictionary.show.edit.citation',
        tip: 'The citation for the dictionary.'
      },
      {
        title: 'Domains',
        target: 'dictionary.show.edit.domain',
        tip: 'Information about defined value lists.'
      },
      {
        title: 'Entities',
        target: 'dictionary.show.edit.entity',
        tip:
          'Information about entities(tables) and attributes(columns or fields).'
      }
    ]
  }
};

var basic = {
  identifier: 'basic',
  namespace: 'org.adiwg.profile',
  alternateId: ['basic'],
  title: 'Basic',
  description: 'A profile with the minimum recommended elements for discovery.',
  version: '0.1.21',
  components: {
    record: {
      main: {
        basicInformation: {
          recordId: false
        },
        resourceType: {
          name: false
        },
        citation: {
          basicInformation: {
            alternateTitle: false,
            dates: {
              dateItem: {
                description: false
              }
            },
            edition: false,
            presentationForm: false
          },
          onlineResource: {
            protocol: false,
            description: false
          },
          identifier: false,
          identifierShort: {
            version: false,
            description: false
          },
          series: false,
          otherCitationDetails: false,
          graphic: false
        },
        description: {
          shortAbstract: false
        },
        supplementalInfo: false,
        environmentDescription: false,
        timePeriod: {
          identifier: false,
          periodName: false,
          interval: false,
          duration: false
        },
        maintenance: {
          dates: false,
          note: false,
          scope: false
        },
        graphicOverview: {
          fileDescription: false,
          onlineResource: {
            protocol: false,
            description: false,
            onlineFunction: {}
          }
        },
        credit: false
      },
      metadata: {
        onlineResource: {
          protocol: false,
          description: false
        },
        maintenance: {
          date: false,
          contact: false,
          note: false,
          scope: false
        },
        parentMetadata: false,
        repositories: false,
        defaultLocale: false,
        alternateMetadataReference: false
      },
      extent: {
        description: false,
        geographic: {
          description: false
        }
      },
      taxonomy: {
        collection: {
          taxonomicSystem: {
            citation: {
              basicInformation: {
                alternateTitle: false,
                dates: {
                  dateItem: {
                    description: false
                  }
                },
                presentationForm: false
              },
              onlineResource: {
                protocol: false,
                description: false
              },
              identifier: false,
              series: false,
              otherCitationDetails: false,
              graphic: false
            }
          }
        }
      },
      distribution: {
        distributor: {
          transferOption: {
            distributionUnit: false,
            offlineOption: {
              storage: {
                density: false,
                units: false
              },
              identifier: false
            },
            transferFrequency: false
          },
          orderProcess: {
            plannedAvailability: false,
            turnaround: false
          }
        }
      },
      associated: {
        resourceCitation: {
          basicInformation: {
            alternateTitle: false,
            edition: false,
            presentationForm: false
          },
          onlineResource: false,
          identifierSimple: false,
          series: false,
          otherCitationDetails: false,
          graphic: false
        },
        metadataCitation: false
      },
      constraints: {
        graphic: false,
        responsibleParty: false
      }
    },
    contact: {},
    dictionary: {
      main: {
        basicInformation: {
          functionalLanguage: false
        },
        recommendedUse: false,
        locale: false
      },
      citation: {
        basicInformation: {
          alternateTitle: false,
          edition: false,
          presentationForm: false
        },
        onlineResource: {
          description: false,
          protocol: false
        },
        identifier: false,
        series: false,
        identifierSimple: {
          visible: true,
          authority: false,
          version: false,
          description: false
        },
        identifierShort: false,
        otherCitationDetails: false,
        graphic: false
      },
      entity: {
        information: {},
        identifier: {},
        codeName: {},
        definition: {},
        commonName: {},
        alias: {},
        structure: {
          fieldSeparatorCharacter: {},
          numberOfHeaderLines: {},
          quoteCharacter: {}
        },
        keys: {},
        index: {},
        entityReference: {
          basicInformation: {},
          title: {},
          alternateTitle: {},
          date: {},
          edition: {},
          presentationForm: {},
          responsibleParty: {},
          onlineResource: {},
          identifier: {},
          identifierSimple: {},
          identifierShort: {},
          series: {
            name: {},
            issue: {},
            page: {}
          },
          otherCitationDetails: {},
          graphicOverview: {}
        },
        attribute: {
          name: {},
          dataType: {},
          definition: {},
          allowNull: {},
          information: {
            codeName: {},
            definition: {},
            dataType: {},
            allowNull: {},
            commonName: {},
            domain: {},
            alias: {},
            units: {},
            unitsResolution: {},
            caseSensitive: {},
            fieldWidth: {},
            missingValue: {},
            minValue: {},
            maxValue: {}
          },
          valueRange: {},
          timePeriod: {},
          attributeReference: {
            basicInformation: {},
            title: {},
            alternateTitle: {},
            date: {},
            edition: {},
            presentationForm: {},
            responsibleParty: {},
            onlineResource: {},
            identifier: {},
            identifierSimple: {},
            identifierShort: {},
            series: {
              name: {},
              issue: {},
              page: {}
            },
            otherCitationDetails: {},
            graphicOverview: {}
          }
        },
        citation: {
          identifier: {
            identifier: {},
            namespace: {},
            version: {},
            description: {},
            authority: {
              basicInformation: {},
              title: {},
              alternateTitle: {},
              date: {},
              responsibleParty: {},
              onlineResource: {},
              identifier: {},
              identifierSimple: {},
              identifierShort: {}
            }
          }
        }
      },
      domain: {
        information: {
          commonName: false
        },
        domainReference: {
          basicInformation: {
            alternateTitle: false,
            edition: false,
            presentationForm: false
          },
          onlineResource: {
            description: false,
            protocol: false
          },
          identifier: false,
          series: false,
          identifierSimple: {
            visible: true,
            authority: false,
            version: false,
            description: false
          },
          identifierShort: false,
          otherCitationDetails: false,
          graphic: false
        },
        domainItem: {
          reference: {
            basicInformation: {
              alternateTitle: false,
              edition: false,
              presentationForm: false
            },
            onlineResource: {
              description: false,
              protocol: false
            },
            identifier: false,
            series: false,
            identifierSimple: {
              visible: true,
              authority: false,
              version: false,
              description: false
            },
            identifierShort: false,
            otherCitationDetails: false,
            graphic: false
          }
        }
      }
    }
  },
  nav: {
    record: [
      {
        title: 'Main',
        target: 'record.show.edit.main',
        tip: 'Basic information about the resource.'
      },
      {
        title: 'Metadata',
        target: 'record.show.edit.metadata',
        tip: 'Information about the metadata for the resource.'
      },
      {
        title: 'Keywords',
        target: 'record.show.edit.keywords',
        tip: 'Terms used to describe the resource.'
      },
      {
        title: 'Extent',
        target: 'record.show.edit.extent',
        tip: 'Information describing the bounds of the resource.'
      },
      {
        title: 'Taxonomy',
        target: 'record.show.edit.taxonomy',
        tip: 'Information on the taxa associated with the resource.'
      },
      {
        title: 'Distribution',
        target: 'record.show.edit.distribution',
        tip: 'Information about obtaining the resource.'
      },
      {
        title: 'Constraints',
        target: 'record.show.edit.constraint',
        tip: 'Information about constraints applied to the resource.'
      },
      {
        title: 'Associated',
        target: 'record.show.edit.associated',
        tip: 'Other resources with a defined relationship to the resource.'
      }
    ],
    dictionary: [
      {
        title: 'Main',
        target: 'dictionary.show.edit.index',
        tip: 'Basic information about the dictionary.'
      },
      {
        title: 'Citation',
        target: 'dictionary.show.edit.citation',
        tip: 'The citation for the dictionary.'
      },
      {
        title: 'Domains',
        target: 'dictionary.show.edit.domain',
        tip: 'Information about defined value lists.'
      },
      {
        title: 'Entities',
        target: 'dictionary.show.edit.entity',
        tip:
          'Information about entities(tables) and attributes(columns or fields).'
      }
    ]
  }
};

var project = {
  identifier: 'project',
  namespace: 'org.adiwg.profile',
  alternateId: ['project'],
  title: 'Project',
  description: 'Document a project',
  version: '0.1.21',
  components: {
    record: {
      main: {
        basicInformation: {
          recordId: false
        },
        citation: {
          basicInformation: {
            edition: false,
            presentationForm: false
          },
          onlineResource: {
            protocol: false,
            applicationProfile: false,
            protocolRequest: false
          },
          identifier: {
            version: false,
            description: false,
            authority: {
              basicInformation: {
                alternateTitle: false
              },
              onlineResource: {
                protocol: false,
                applicationProfile: false,
                protocolRequest: false
              },
              identifier: false
            }
          },
          otherCitationDetails: false,
          graphic: false
        },
        environmentDescription: false,
        timePeriod: {
          identifier: false,
          description: false,
          periodName: false,
          interval: false,
          duration: false
        },
        maintenance: false,
        graphicOverview: false,
        credit: false
      },
      metadata: {
        metadataIdentifier: {
          version: false,
          description: false,
          authority: false
        },
        parentMetadata: {
          basicInformation: {
            alternateTitle: false,
            edition: false,
            presentationForm: false
          },
          identifier: false,
          identifierSimple: {
            version: false,
            description: false,
            authority: false
          },
          series: false,
          otherCitationDetails: false,
          graphic: false
        },
        onlineResource: {
          protocol: false,
          applicationProfile: false,
          protocolRequest: false
        },
        maintenance: false,
        defaultLocale: false,
        alternateMetadataReference: false
      },
      extent: {
        geographic: {
          description: false,
          containsData: false
        }
      },
      taxonomy: {
        collection: {
          taxonomicSystem: {
            citation: {
              onlineResource: {
                protocol: false,
                applicationProfile: false,
                protocolRequest: false
              },
              identifier: false,
              identifierSimple: {
                authority: {
                  basicInformation: {
                    alternateTitle: false,
                    dates: false
                  },
                  onlineResource: {
                    protocol: false,
                    applicationProfile: false,
                    protocolRequest: false
                  },
                  identifier: false
                }
              },
              identifierShort: false,
              series: false,
              otherCitationDetails: false,
              graphic: false
            }
          },
          observer: false,
          generalScope: false,
          identificationProcedure: false,
          identificationCompleteness: false,
          voucher: false
        }
      },
      associated: {
        resourceCitation: {
          basicInformation: {
            alternateTitle: false,
            edition: false,
            presentationForm: false
          },
          identifier: false,
          identifierSimple: false,
          onlineResource: {
            protocol: false,
            applicationProfile: false,
            protocolRequest: false
          },
          identifierShort: {},
          series: false,
          otherCitationDetails: false,
          graphic: false
        },
        metadataCitation: {
          basicInformation: {
            alternateTitle: false,
            edition: false,
            presentationForm: false
          },
          identifier: false,
          identifierSimple: false,
          onlineResource: {
            protocol: false,
            applicationProfile: false,
            protocolRequest: false
          },
          identifierShort: {},
          series: false,
          otherCitationDetails: false,
          graphic: false
        }
      },
      documents: {
        resourceType: {
          resourceType: {},
          name: {}
        },
        citation: {
          identifier: false,
          identifierSimple: false,
          onlineResource: {
            protocol: false,
            applicationProfile: false,
            protocolRequest: false
          },
          identifierShort: {},
          otherCitationDetails: false,
          graphic: false
        }
      },
      funding: {
        fundingPeriod: {
          allocation: {
            onlineResource: {
              protocol: false,
              applicationProfile: false,
              protocolRequest: false
            }
          },
          timePeriod: {
            identifier: false,
            description: false,
            periodName: false,
            duration: false,
            interval: false
          }
        }
      }
    },
    contact: {},
    dictionary: {}
  },
  nav: {
    record: [
      {
        title: 'Main',
        target: 'record.show.edit.main',
        tip: 'Basic information about the project.'
      },
      {
        title: 'Metadata',
        target: 'record.show.edit.metadata',
        tip: 'Information about the metadata for the project.'
      },
      {
        title: 'Keywords',
        target: 'record.show.edit.keywords',
        tip: 'Terms used to describe the project.'
      },
      {
        title: 'Extent',
        target: 'record.show.edit.extent',
        tip: 'Information describing the bounds of the project.'
      },
      {
        title: 'Taxonomy',
        target: 'record.show.edit.taxonomy',
        tip: 'Information on the taxa associated with the project.'
      },
      {
        title: 'Associated',
        target: 'record.show.edit.associated',
        tip: 'Other resources with a defined relationship to the project.'
      },
      {
        title: 'Documents',
        target: 'record.show.edit.documents',
        tip: 'Other documents related to, but not defining, the project.'
      },
      {
        title: 'Funding',
        target: 'record.show.edit.funding',
        tip:
          'Information about funding allocated to development of the project.'
      }
    ]
  }
};

var product = {
  identifier: 'product',
  namespace: 'org.adiwg.profile',
  alternateId: ['lccProduct'],
  title: 'Product',
  description:
    'Document a product, typically a data product generated by a project',
  version: '0.1.21',
  components: {
    record: {},
    contact: {},
    dictionary: {}
  },
  nav: {
    record: [
      {
        title: 'Main',
        target: 'record.show.edit.main',
        tip: 'Basic information about the product.'
      },
      {
        title: 'Metadata',
        target: 'record.show.edit.metadata',
        tip: 'Information about the metadata for the product.'
      },
      {
        title: 'Keywords',
        target: 'record.show.edit.keywords',
        tip: 'Terms used to describe the product.'
      },
      {
        title: 'Extent',
        target: 'record.show.edit.extent',
        tip: 'Information describing the bounds of the product.'
      },
      {
        title: 'Spatial',
        target: 'record.show.edit.spatial',
        tip: 'Information concerning the spatial attributes of the product.'
      },
      {
        title: 'Lineage',
        target: 'record.show.edit.lineage',
        tip: 'Information on the history of the product.'
      },
      {
        title: 'Taxonomy',
        target: 'record.show.edit.taxonomy',
        tip: 'Information on the taxa associated with the product.'
      },
      {
        title: 'Distribution',
        target: 'record.show.edit.distribution',
        tip: 'Information about obtaining the product.'
      },
      {
        title: 'Constraints',
        target: 'record.show.edit.constraint',
        tip: 'Information about constraints applied to the product.'
      },
      {
        title: 'Associated',
        target: 'record.show.edit.associated',
        tip: 'Other resources with a defined relationship to the product.'
      },
      {
        title: 'Documents',
        target: 'record.show.edit.documents',
        tip: 'Other documents related to, but not defining, the product.'
      },
      {
        title: 'Dictionaries',
        target: 'record.show.edit.dictionary',
        tip: 'Data dictionaries associated with the product.'
      }
    ],
    dictionary: [
      {
        title: 'Main',
        target: 'dictionary.show.edit.index',
        tip: 'Basic information about the dictionary.'
      },
      {
        title: 'Citation',
        target: 'dictionary.show.edit.citation',
        tip: 'The citation for the dictionary.'
      },
      {
        title: 'Domains',
        target: 'dictionary.show.edit.domain',
        tip: 'Information about defined value lists.'
      },
      {
        title: 'Entities',
        target: 'dictionary.show.edit.entity',
        tip:
          'Information about entities(tables) and attributes(columns or fields).'
      }
    ]
  }
};

var schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'profile-schema',
  version: '0.1.21',
  type: 'object',
  description: 'JSON schema for mdEditor profile definitions',
  additionalProperties: false,
  properties: {
    identifier: {
      type: 'string'
    },
    alternateId: {
      type: 'array',
      description: 'List of alternate identifiers for the profile definition',
      items: {
        type: 'string'
      }
    },
    namespace: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    version: {
      type: 'string'
    },
    components: {
      $ref: '#/definitions/Components'
    },
    nav: {
      $ref: '#/definitions/Nav'
    }
  },
  required: ['description', 'identifier', 'namespace', 'title', 'version'],
  title: 'Profile definition',
  anyOf: [
    {
      type: 'object',
      title: 'components is required',
      required: ['components']
    },
    {
      type: 'object',
      title: 'nav is required',
      required: ['nav']
    }
  ],
  definitions: {
    Components: {
      type: 'object',
      additionalProperties: false,
      properties: {
        record: {
          $ref: '#/definitions/Component'
        },
        contact: {
          $ref: '#/definitions/Component'
        },
        dictionary: {
          $ref: '#/definitions/Component'
        }
      },
      title: 'Components'
    },
    Component: {
      type: 'object'
    },
    Nav: {
      type: 'object',
      additionalProperties: true,
      propertyNames: {
        enum: ['record', 'contact', 'dictionary']
      },
      patternProperties: {
        '{record|contact|dictionary': {
          $ref: '#/definitions/NavItem'
        }
      },
      title: 'Nav'
    },
    NavItem: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: {
            type: 'string'
          },
          target: {
            type: 'string'
          },
          tip: {
            type: 'string'
          }
        },
        required: ['target', 'tip', 'title'],
        title: 'NavItem'
      },
      title: 'Navigation Section'
    }
  }
};

var pkg = {
  name: 'mdprofiles',
  version: '0.1.21',
  description: 'Profiles for the mdEditor',
  main: 'index.js',
  module: 'dist/mdprofile.es.js',
  browser: 'dist/mdprofile.umd.js',
  scripts: {
    pretest: 'npm run build',
    test: 'mocha',
    build: 'rollup -c',
    release: 'release-it',
    deploy: 'NODE_DEBUG=gh-pages node scripts/pages.js'
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/adiwg/mdProfile.git'
  },
  keywords: ['mdEditor', 'metadata', 'mdJSON'],
  files: ['resources', 'src', 'dist'],
  author: 'jlblcc',
  license: 'Unlicense',
  bugs: {
    url: 'https://github.com/adiwg/mdProfile/issues'
  },
  homepage: 'https://github.com/adiwg/mdProfile#readme',
  devDependencies: {
    eslint: '^5.16.0',
    'eslint-config-prettier': '^3.6.0',
    'eslint-plugin-node': '^8.0.0',
    'eslint-plugin-prettier': '^3.1.0',
    'gh-pages': '^2.1.1',
    husky: '^1.3.1',
    'lint-staged': '^8.2.0',
    mocha: '^6.2.1',
    prettier: '^1.18.2',
    'release-it': '^12.4.3',
    'replace-in-file': '^4.1.3',
    'rollup-plugin-commonjs': '^9.3.0',
    'rollup-plugin-json': '^3.1.0',
    'rollup-plugin-node-resolve': '^4.2.0',
    'rollup-plugin-replace': '^2.2.0',
    semver: '^6.3.0'
  },
  husky: {
    hooks: {
      'pre-commit': 'lint-staged'
    }
  },
  'lint-staged': {
    '*.{js,json,css,md}': ['prettier --write', 'git add']
  },
  dependencies: {
    ajv: '^6.10.0'
  },
  directories: {
    test: 'test'
  }
};

/**
 * @module mdProfile
 */

const version = pkg.version;

function asArray() {
  return [full, basic, project, product];
}

var main = { full, basic, project, product, schema, asArray, version };

export default main;
